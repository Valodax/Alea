const { network, ethers } = require("hardhat")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

async function deployVaultContract() {
    const [deployer] = await ethers.getSigners()

    const Vault = await ethers.getContractFactory("Vault")
    const vaultContract = await Vault.connect(deployer).deploy()

    return { vaultContract, deployer }
}

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault Unit Tests", async function () {
          let vaultContract
          let vaultDeployer
          beforeEach(async function () {
              const result = await loadFixture(deployVaultContract)
              vaultContract = result.vaultContract
              vaultDeployer = result.deployer
          })
          describe("deployment", async function () {
              describe("success", async function () {
                  it("should set the owner to the deployer", async () => {
                      const contractOwner = await vaultContract.getOwner()
                      assert.equal(contractOwner, vaultDeployer.address)
                  })
                  it("deployer should have balance", async () => {
                      const balance = await ethers.provider.getBalance(vaultDeployer.address)
                      assert.notEqual(
                          balance.toString(),
                          "0",
                          "Deployer should have a balance greater than 0"
                      )
                      const ethBalance = ethers.utils.formatEther(balance)
                      console.log("Deployer starting balance:", ethBalance, "ETH")
                  })
              })
          })

          describe("registration", async function () {
              describe("success", async function () {
                  it("should be able to register a contract", async () => {
                      const TestTransfer = await ethers.getContractFactory("TestVaultTransfer")
                      testTransferContract = await TestTransfer.connect(vaultDeployer).deploy(
                          vaultContract.address
                      )
                      await vaultContract
                          .connect(vaultDeployer)
                          .registerContract(testTransferContract.address)
                  })
              })
          })

          describe("deposit", async function () {
              describe("sucess", async function () {
                  it("should take deposits", async () => {
                      const depositAmount = ethers.utils.parseEther("1.0")
                      await vaultContract.connect(vaultDeployer).deposit({ value: depositAmount })
                      const newBalance = await vaultContract.balances(vaultDeployer.address)
                      let newBalanceInEther = parseFloat(ethers.utils.formatEther(newBalance))
                      assert.equal(newBalanceInEther, 1, "Deposit amount is inconsistent!")
                  })
              })
          })

          describe("transfer", function () {
              describe("failure", function () {
                  it("should not let anyone transfer", async () => {
                      try {
                          await vaultContract
                              .connect(vaultDeployer)
                              .transfer(1, vaultDeployer.address)
                          assert.fail("Expected transfer function to throw but it didn't.")
                      } catch (err) {
                          console.log("Error: ", err.message)
                          assert(
                              err.message.includes("revert"),
                              'Expected "revert" error but got this instead: ' + err.message
                          )
                      }
                  })
              })

              describe("success", function () {
                  it("should transfer to a user from a registered contract", async () => {
                      // Get Deployer Starting Balance
                      const deployerStartBalance = await ethers.provider.getBalance(
                          vaultDeployer.address
                      )
                      const deployerStartBalanceEth = ethers.utils.formatEther(deployerStartBalance)
                      console.log("Deployer starting balance:", deployerStartBalanceEth, "ETH")

                      // Deploy TestTransfer Contract
                      const TestTransfer = await ethers.getContractFactory("TestVaultTransfer")
                      testTransferContract = await TestTransfer.connect(vaultDeployer).deploy(
                          vaultContract.address
                      )
                      // Register TestTransfer in Vault
                      await vaultContract
                          .connect(vaultDeployer)
                          .registerContract(testTransferContract.address)

                      // Deposit ETH into Vault
                      const depositAmount = ethers.utils.parseEther("1000")
                      await vaultContract.connect(vaultDeployer).deposit({ value: depositAmount })

                      const deployerBalanceAfterDeposit = await ethers.provider.getBalance(
                          vaultDeployer.address
                      )
                      const vaultBalanceAfterDeposit = await ethers.provider.getBalance(
                          vaultContract.address
                      )
                      console.log(
                          "Deployer balance after deposit:",
                          ethers.utils.formatEther(deployerBalanceAfterDeposit),
                          "ETH"
                      )
                      console.log(
                          "Vault balance after deposit:",
                          ethers.utils.formatEther(vaultBalanceAfterDeposit),
                          "ETH"
                      )
                      // Transfer ETH from Vault to User via TestTransfer
                      const transferAmount = ethers.utils.parseEther("300")
                      const txResult = await testTransferContract
                          .connect(vaultDeployer)
                          .playGame(transferAmount)
                      const receipt = await txResult.wait()
                      const gasUsed = receipt.gasUsed.mul(txResult.gasPrice)
                      // Check vault balance
                      const actualVaultBalance = await ethers.provider.getBalance(
                          vaultContract.address
                      )
                      const expectedVaultBalance = ethers.utils.parseEther("700")
                      assert.equal(
                          actualVaultBalance.toString(),
                          expectedVaultBalance.toString(),
                          "Vault balance after transfer is incorrect"
                      )
                      // Check deployer balance
                      const expectedDeployerBalance = transferAmount
                          .add(deployerBalanceAfterDeposit)
                          .sub(gasUsed)
                      const actualDeployerBalance = await ethers.provider.getBalance(
                          vaultDeployer.address
                      )
                      assert.equal(
                          expectedDeployerBalance.toString(),
                          actualDeployerBalance.toString(),
                          "Deployer balance after transfer is incorrect"
                      )

                      console.log(
                          "Vault Balance after transfer:",
                          ethers.utils.formatEther(actualVaultBalance),
                          "ETH"
                      )
                      console.log(
                          "Deployer Balance after transfer:",
                          ethers.utils.formatEther(actualDeployerBalance),
                          "ETH"
                      )
                  })
              })
          })
      })
