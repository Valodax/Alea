const { network, ethers } = require("hardhat")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")
const { developmentChains } = require("../../helper-hardhat-config")
const { assert } = require("chai")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Vault Unit Tests", async function () {
          async function deployVaultContract() {
              const [deployer] = await ethers.getSigners()

              const Vault = await ethers.getContractFactory("Vault")
              const vaultContract = await Vault.connect(deployer).deploy()

              return { vaultContract, deployer }
          }

          describe("deployment", async function () {
              describe("success", async function () {
                  it("should set the owner to the deployer", async () => {
                      const { vaultContract, deployer } = await loadFixture(deployVaultContract)
                      const contractOwner = await vaultContract.getOwner()
                      assert.equal(contractOwner, deployer.address)
                  })
              })
          })
      })
