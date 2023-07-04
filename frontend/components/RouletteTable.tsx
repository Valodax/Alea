import React, { useState } from "react";

function RouletteTable() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (number) => {
        alert(`You clicked on ${number}!`);
    };

    return (
        <div className="flex w-full h-full">
            <svg version="1.1" id="Layer_1" xmlns="&ns_svg;" viewBox="0 0 550 165">
                <title>European roulette layout</title>

                <rect fill="#060" width="100%" height="100%" />
                <g>
                    <g>
                        <g>
                            <g id="XMLID_3_">
                                <g>
                                    <rect x="488.249" y="72.12" fill="#f00" width="26.916" height="33.349" />
                                    <rect x="488.249" y="38.817" width="26.916" height="33.303" />
                                    <rect x="488.249" y="5.468" fill="#f00" width="26.916" height="33.352" />
                                    <rect x="461.334" y="72.12" width="26.914" height="33.349" />
                                    <rect x="461.334" y="38.817" fill="#f00" width="26.914" height="33.303" />
                                    <rect x="461.334" y="5.468" width="26.914" height="33.352" />
                                    <rect x="434.418" y="72.12" fill="#f00" width="26.916" height="33.349" />
                                    <rect x="434.418" y="38.817" width="26.916" height="33.303" />
                                    <rect x="434.418" y="5.468" fill="#f00" width="26.916" height="33.352" />
                                    <rect x="407.504" y="72.12" fill="#f00" width="26.914" height="33.349" />
                                    <rect x="407.504" y="38.817" width="26.914" height="33.303" />
                                    <rect x="407.504" y="5.468" fill="#f00" width="26.914" height="33.352" />
                                    <rect x="380.579" y="72.12" width="26.926" height="33.349" />
                                    <rect x="380.579" y="38.817" fill="#f00" width="26.926" height="33.303" />
                                    <rect x="380.579" y="5.468" width="26.926" height="33.352" />
                                    <rect x="353.581" y="72.12" width="26.998" height="33.349" />
                                    <rect x="353.581" y="38.817" width="26.998" height="33.303" />
                                    <rect x="353.581" y="5.468" fill="#f00" width="26.998" height="33.352" />
                                    <rect x="326.665" y="72.12" fill="#f00" width="26.916" height="33.349" />
                                    <rect x="326.665" y="38.817" width="26.916" height="33.303" />
                                    <rect x="326.665" y="5.468" fill="#f00" width="26.916" height="33.352" />
                                    <rect x="299.75" y="72.12" width="26.914" height="33.349" />
                                    <rect x="299.75" y="38.817" fill="#f00" width="26.914" height="33.303" />
                                    <rect x="299.75" y="5.468" width="26.914" height="33.352" />
                                    <rect x="272.835" y="72.12" width="26.916" height="33.349" />
                                    <rect x="272.835" y="38.817" width="26.916" height="33.303" />
                                    <rect x="272.835" y="5.468" fill="#f00" width="26.916" height="33.352" />
                                    <rect x="245.919" y="72.12" fill="#f00" width="26.916" height="33.349" />
                                    <rect x="245.919" y="38.817" width="26.916" height="33.303" />
                                    <rect x="245.919" y="5.468" fill="#f00" width="26.916" height="33.352" />
                                    <rect x="219.004" y="72.12" width="26.915" height="33.349" />
                                    <rect x="219.004" y="38.817" fill="#f00" width="26.915" height="33.303" />
                                    <rect x="219.004" y="5.468" width="26.915" height="33.352" />
                                    <rect x="192.079" y="72.12" fill="#f00" width="26.925" height="33.349" />
                                    <rect x="192.079" y="38.817" width="26.925" height="33.303" />
                                    <rect x="192.079" y="5.468" fill="#f00" width="26.925" height="33.352" />
                                </g>
                                <g>
                                    <polygon
                                        fill="none"
                                        stroke="#fff"
                                        points="192.079,38.817 192.079,5.468 219.004,5.468 245.919,5.468 272.835,5.468 
                                299.75,5.468 326.665,5.468 353.581,5.468 380.579,5.468 407.504,5.468 434.418,5.468 461.334,5.468 488.249,5.468 
                                515.165,5.468 542.079,5.468 542.079,38.817 542.079,72.12 542.079,105.469 515.165,105.469 488.249,105.469 461.334,105.469 
                                434.418,105.469 407.504,105.469 380.579,105.469 353.581,105.469 326.665,105.469 299.75,105.469 272.835,105.469 
                                245.919,105.469 219.004,105.469 192.079,105.469 192.079,72.12 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="192.079,72.12 219.004,72.12 245.919,72.12 272.835,72.12 299.75,72.12 
                                326.665,72.12 353.581,72.12 380.579,72.12 407.504,72.12 434.418,72.12 461.334,72.12 488.249,72.12 515.165,72.12 
                                542.079,72.12 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="192.079,38.817 219.004,38.817 245.919,38.817 272.835,38.817 299.75,38.817 
                                326.665,38.817 353.581,38.817 380.579,38.817 407.504,38.817 434.418,38.817 461.334,38.817 488.249,38.817 515.165,38.817 
                                542.079,38.817 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="515.165,5.468 515.165,38.817 515.165,72.12 515.165,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="488.249,5.468 488.249,38.817 488.249,72.12 488.249,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="461.334,5.468 461.334,38.817 461.334,72.12 461.334,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="434.418,5.468 434.418,38.817 434.418,72.12 434.418,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="407.504,5.468 407.504,38.817 407.504,72.12 407.504,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="380.579,5.468 380.579,38.817 380.579,72.12 380.579,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="353.581,5.468 353.581,38.817 353.581,72.12 353.581,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="326.665,5.468 326.665,38.817 326.665,72.12 326.665,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="299.75,5.468 299.75,38.817 299.75,72.12 299.75,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="272.835,5.468 272.835,38.817 272.835,72.12 272.835,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="245.919,5.468 245.919,38.817 245.919,72.12 245.919,105.469 					"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="#fff"
                                        points="219.004,5.468 219.004,38.817 219.004,72.12 219.004,105.469 					"
                                    />
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g id="XMLID_1_">
                                    <g>
                                        <rect x="353.581" y="125.6" width="53.861" height="20" />
                                        <rect x="299.72" y="125.6" fill="#f00" width="53.86" height="20" />
                                    </g>
                                    <g>
                                        <polygon
                                            fill="none"
                                            stroke="#fff"
                                            points="192.081,125.6 192.081,105.6 299.72,105.6 407.44,105.6 515.081,105.6 
                                    515.081,125.6 515.081,145.6 461.221,145.6 407.44,145.6 353.581,145.6 299.72,145.6 245.94,145.6 192.081,145.6 						"
                                        />
                                        <polyline
                                            fill="none"
                                            stroke="#fff"
                                            points="192.081,125.6 245.94,125.6 299.72,125.6 353.581,125.6 407.44,125.6 
                                    461.221,125.6 515.081,125.6 						"
                                        />
                                        <line
                                            fill="none"
                                            stroke="#fff"
                                            x1="461.221"
                                            y1="125.6"
                                            x2="461.221"
                                            y2="145.6"
                                        />
                                        <polyline
                                            fill="none"
                                            stroke="#fff"
                                            points="407.44,105.6 407.44,125.6 407.44,145.6 						"
                                        />
                                        <line
                                            fill="none"
                                            stroke="#fff"
                                            x1="353.581"
                                            y1="125.6"
                                            x2="353.581"
                                            y2="145.6"
                                        />
                                        <polyline
                                            fill="none"
                                            stroke="#fff"
                                            points="299.72,105.6 299.72,125.6 299.72,145.6 						"
                                        />
                                        <line fill="none" stroke="#fff" x1="245.94" y1="125.6" x2="245.94" y2="145.6" />
                                    </g>
                                </g>
                            </g>
                        </g>
                        <path
                            fill="none"
                            stroke="#fff"
                            d="M192.023,105.468c-6.813,0-13.626,0-20.439,0l-6.561-51l6.561-49c6.813,0,13.626,0,20.439,0
                    "
                        />
                    </g>
                    <g fill="#fff" font-family="'Verdana'" font-size="14">
                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 209.8462 93.2649)">1</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 183.771 60.22)">0</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 209.8462 60.22)">2</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 209.8462 26.5383)">3</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 237.5142 93.2649)">4</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 237.5142 26.5383)">6</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 237.5142 60.22)">5</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 263.9478 93.2649)">7</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 263.9478 60.22)">8</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 263.9478 26.5383)">9</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 290.6157 97.7141)">10</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 290.6157 30.9895)">12</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 290.6157 64.6711)">11</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 318.27 97.7141)">13</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 318.27 64.6711)">14</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 318.27 30.9895)">15</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 344.939 97.7141)">16</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 344.939 30.9895)">18</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 344.939 64.6711)">17</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 371.9272 97.7141)">19</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 371.9272 64.6711)">20</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 371.9272 30.9895)">21</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 398.5962 97.7141)">22</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 398.5962 30.9895)">24</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 398.5962 64.6711)">23</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 426.0278 97.7141)">25</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 426.0288 64.6711)">26</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 426.0278 30.9895)">27</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 452.6968 97.7141)">28</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 452.6968 30.9895)">30</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 452.6978 64.6711)">29</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 479.2378 97.7141)">31</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 479.2388 64.6711)">32</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 479.2378 30.9895)">33</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 505.9067 97.7141)">34</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 505.9067 30.9895)">36</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 505.9077 64.6711)">35</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 533.0688 34.1672)">2-1</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 533.0688 100.8938)">2-1</text>

                        <text transform="matrix(-4.371139e-008 -1 1 -4.371139e-008 533.0688 67.8489)">2-1</text>
                        <text
                            transform="matrix(1 0 0 1 226.3706 120.072)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            1st 12
                        </text>
                        <text
                            transform="matrix(1 0 0 1 332.0239 120.072)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            2nd 12
                        </text>
                        <text
                            transform="matrix(1 0 0 1 441.0845 120.071)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            3rd 12
                        </text>
                        <text
                            transform="matrix(1 0 0 1 205.0933 139.8757)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            1-18
                        </text>
                        <text
                            transform="matrix(1 0 0 1 258.0073 139.8757)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            Even
                        </text>
                        <text
                            transform="matrix(1 0 0 1 421.9009 139.8748)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            Odd
                        </text>
                        <text
                            transform="matrix(1 0 0 1 469.729 139.8757)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            19-36
                        </text>
                        <text
                            transform="matrix(1 0 0 1 315.6938 139.8748)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            Red
                        </text>
                        <text
                            transform="matrix(1 0 0 1 365.2524 139.8748)"
                            fill="#fff"
                            font-family="'Verdana'"
                            font-size="12"
                        >
                            Black
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default RouletteTable;
