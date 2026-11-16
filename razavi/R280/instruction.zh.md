对于工作在亚阈值（subthreshold）区的 MOSFET，其漏极电流为
$$I_D = \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS}-V_{TH}}{V_T}\right)\left[1-\exp\!\left(\frac{-V_{DS}}{V_T}\right)\right],$$
其中 $C_d$ 是单位面积的耗尽层电容（depletion capacitance），$V_T = kT/q$。若器件处于深线性区（deep triode region），则 $V_{DS} \ll V_T$。利用 $\exp(-\epsilon) \approx 1 - \epsilon$，求导通电阻（on-resistance）。
