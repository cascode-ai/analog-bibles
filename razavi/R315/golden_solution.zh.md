$$s_z = -\frac{2g_{mP}}{C_E}$$
这是一个左半平面零点（left-half-plane zero），其频率是电流镜极点 $g_{mP}/C_E$ 的两倍。
- 当 $V_{out} = 0$ 时，戴维南支路（$V_X$ 与 $R_X$ 串联）驱动节点 E，E 点的对地阻抗为 $Z_E = 1/(g_{mP} + C_Es)$：
  $V_E = -V_X\dfrac{Z_E}{Z_E + R_X}$，支路中的电流（从输出端流入该支路）为 $I_X = -\dfrac{V_X}{Z_E + R_X}$。
- 流入短路输出端的电流：来自 $M_4$ 的 $-g_{mP}V_E$ 和来自支路的 $-I_X$：
  $I_{short} = -g_{mP}V_E - I_X = \dfrac{V_X(g_{mP}Z_E + 1)}{Z_E + R_X}$。
- $I_{short} = 0$ 要求 $g_{mP}Z_E = -1$，即 $g_{mP} + C_Es = -g_{mP}$，因此 $s_z = -2g_{mP}/C_E$。
- 解释：快通路（直接经 $R_X$）与慢通路（经电流镜，极点为 $g_{mP}/C_E$）相加；其和 $1 + 1/(1 + s/\omega_E)$ 在 $s = -2\omega_E$ 处为零。
