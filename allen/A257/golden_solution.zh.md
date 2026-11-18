在输出节点列 KCL（缓冲器输出为 $-AV_i$）：

$sC_c(-AV_i - V_{out}) = g_{mII}V_i + V_{out}\left(sC_{II} + \dfrac{1}{R_{II}}\right)$

$\Rightarrow V_{out}\left[s(C_c + C_{II}) + \dfrac1{R_{II}}\right] = -V_i(sAC_c + g_{mII})$

$\Rightarrow \dfrac{V_{out}}{V_i} = -\dfrac{sAC_c + g_{mII}}{s(C_c + C_{II}) + 1/R_{II}} = \dfrac{-AC_c}{C_c + C_{II}}\cdot\dfrac{s + g_{mII}/(AC_c)}{s + 1/[R_{II}(C_c + C_{II})]}$。

- 零点：$s = -g_{mII}/(AC_c)$，位于左半平面（由于前馈通路经过了反相，它与 $g_{mII}$ 通路相加而不是相抵）。
- 极点：$s = -1/[R_{II}(C_c + C_{II})]$。
- 直流增益为 $-g_{mII}R_{II}$；高频增益为 $-AC_c/(C_c + C_{II})$。
