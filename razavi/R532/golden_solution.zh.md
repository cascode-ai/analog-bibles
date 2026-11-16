带宽最多可提高 α 倍（功耗为原来的 α 倍），前提是固定的负载电容在输出节点上占主导。实际上提高幅度会略小一些，并且随着 α 增大而趋于饱和。

- 放大 α 倍使每个 $g_m$ 和每个晶体管电容都乘以 α，每个 $r_O$ 都除以 α。各增益和电压余度（headroom）不变，内部节点的极点（$R \times C$）也不移动。
- 输出极点：$\omega_{p2} = g_{m,out}/(C_L + C_p)$ 变为 $\alpha g_{m,out}/(C_L + \alpha C_p)$；若 $C_L \gg \alpha C_p$，它 ≈ $\alpha\omega_{p2}$。
- 补偿可以随之调整。第一级输出电阻减小 α 倍，因此在 $C_C$ 不变时，密勒补偿（Miller compensation）下的主极点和 $\omega_T \propto g_{m1}/C_C$ 都提高 α 倍。把 $R_z$ 除以 α，可使其零点保持在新的输出极点上。于是 $|\beta H|$ 在 $\alpha\omega_{p2}$ 处穿越单位增益，闭环带宽（closed-loop bandwidth）提高 α 倍。
- 限制：输出端的器件电容随 α 增大。提高倍数为 $\alpha(C_L + C_p)/(C_L + \alpha C_p)$，当 α 很大时它趋近 $(C_L + C_p)/C_p$。一旦放大后的输出极点接近那些不随缩放移动的内部极点（共源共栅节点和第一级节点），这些极点就成为次极点（nondominant pole），并限制带宽。
