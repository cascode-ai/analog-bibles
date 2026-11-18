$\mathrm{CMRR} = \left|\dfrac{A_{dm}}{A_{cm}}\right| \simeq (2g_{m1}r_{o5})\,g_{m3}(r_{o1}\parallel r_{o3}) \simeq \dfrac{2V_{A5}}{V_{ov1}}\cdot\dfrac{2}{|V_{ov3}|}\cdot\dfrac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|}$

- CMRR 由第一级决定：$\mathrm{CMRR} = \dfrac{v_{o1}/v_{id}}{v_{o1}/v_{ic}} = \mathrm{CMRR}_1$。第二级为单端输入、单端输出，对差模和共模输出的放大倍数相同。
- 带电流镜负载、尾电阻为 $r_{tail} = r_{o5}$ 的第一级：$A_{dm1} = g_{m1}(r_{o2}\parallel r_{o4})$。共模输入使两个漏极电流各变化约 $v_{ic}/(2r_{o5})$；电流镜将这两个相等的变化量相减，只留下由 $g_{m3}r_o$ 有限所引起的很小残余。因此共模增益为 $|A_{cm1}| \approx 1/(2g_{m3}r_{o5})$，$\mathrm{CMRR}_1 \simeq (2g_{m1}r_{o5})\,g_{m3}(r_{o1}\parallel r_{o3})$（其中 $r_{o1} = r_{o2}$，$r_{o3} = r_{o4}$）。
- 利用 $g_m = 2|I_D|/|V_{ov}|$、$r_o = |V_A|/|I_D|$、$I_{D5} = 2I_{D1}$ 和 $|I_{D3}| = I_{D1}$：$2g_{m1}r_{o5} = 2V_{A5}/V_{ov1}$，$g_{m3}(r_{o1}\parallel r_{o3}) = \dfrac{2}{|V_{ov3}|}\dfrac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|}$。这是两个 $g_mr_o$ 型因子的乘积，因此数值很大。较小的过驱动电压（以及长沟道）可以提高 CMRR，采用输出电阻更高的尾电流源可以进一步提高 CMRR，但会牺牲共模范围。
- 这里忽略了体效应。若 $M_1$、$M_2$ 的衬底接 $-V_{SS}$，则 $2g_{m1}r_{o5}$ 变为 $2(g_{m1}+g_{mb1})r_{o5}$，CMRR 略有提高；这种形式同样正确。
