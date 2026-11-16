$V_{out} = V_{GS} = V_{TH}(V_{SB}) + \sqrt{2I_1/\beta}$ 随 $V_{in}$ 升高而下降，因为升高衬底电压会减小 $V_{SB}$，从而降低 $V_{TH}$；$V_{SB}$ 越接近零，下降越陡。当 $V_{in}$ 等于源极电压时，$V_{out}$ 达到 $V_{TH0} + \sqrt{2I_1/\beta}$；超过该点后，源-衬底结（source–bulk junction）正向偏置（forward-biased），并在接近范围顶端时大量导通，MOS 模型不再适用。
- $M_1$ 为二极管连接（diode-connected），因而始终处于饱和区（saturation region），并流过 $I_1$，因此 $V_{GS} = V_{TH} + \sqrt{2I_1/\beta}$，其中 $V_{SB} = V_S - V_{in} = (3 - V_{out}) - V_{in}$。
- $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ 随 $V_{SB}$ 减小而增大，因此曲线向下凹（concave down），越来越陡。
- 示例，取 $\sqrt{2I_1/\beta} = 0.2$ V：$V_{in} = 0$ 时 $V_{out}$ = 1.21 V（$V_{SB}$ ≈ 1.79 V），1 V 时为 1.08 V，1.5 V 时为 1.00 V，2.1 V 时为 0.90 V（$V_{SB} = 0$，$V_{in} = V_S$），2.5 V 时 ≈ 0.82 V（正向偏压 ≈ 0.3 V）。
- 当 $V_{in} > V_S$ 时，该结正向偏置；当正向偏压接近 0.6–0.7 V 时（$V_{in}$ 趋近 3 V），该结会从沟道分走 $I_1$ 的很大一部分，体效应（body effect）公式不再有意义。漏-衬底结（drain–bulk junction）保持截止（漏极为 3 V ≥ $V_{in}$）。
