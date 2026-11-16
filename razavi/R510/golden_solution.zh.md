$A_v = V_{out}/V_{in} \approx (g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}$（差分输出），其中 $R_{out} \approx [g_{m5}r_{O5}(r_{O2} \parallel r_{O7})] \parallel [g_{m3}r_{O3}r_{O9}]$（另一侧对称）。
- 采用半边电路（half circuit）：$M_1$/$M_A$ 一侧加 $+V_{in}/2$，$M_2$/$M_B$ 一侧加 $-V_{in}/2$。主通路：$M_2$ 的漏极电流（从 P 点抽取）减小 $g_{m1}V_{in}/2$，于是从 P 流入 $M_5$、流向左侧输出端的电流就增加同样的量。
- 辅助通路：$M_A$ 的电流增大，由于 $I_1$ 是理想的，节点 X 下降 $g_{mA}r_{OA}V_{in}/2$。这使 $|V_{GS7}|$ 增大，于是 $M_7$ 向 P 多注入 $g_{m7}g_{mA}r_{OA}V_{in}/2$ 的电流。两部分贡献相加。
- 每一侧的短路跨导（short-circuit transconductance）：$G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$。每个输出端变化 $\pm G_mR_{out}V_{in}/2$，因此差分增益为 $G_mR_{out}$。
- 输出电阻：PMOS 共源共栅（cascode）管 $M_5$ 的源极接折叠节点（folding node），该处对地电阻为 $r_{O7} \parallel r_{O2}$；它与源极接 $M_9$ 的 NMOS 共源共栅管 $M_3$ 两者并联。
- 增益被提高为原来的 $1 + g_{m7}g_{mA}r_{OA}/g_{m1}$ 倍；若 $g_{m7}$、$g_{mA}$ 与 $g_{m1}$ 相当，这大致相当于一个本征增益（intrinsic gain）$g_mr_O$。
