令 $D \equiv 1 + Z_S\left(g_m + g_{mb} + \dfrac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]$，则
$$I_{n,out1} = \frac{I_n\,[1 + sC_{GS}(Z_1 + Z_S)]}{D},\qquad I_{n,out2} = \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}$$
等效要求 $V_n = I_n\dfrac{1 + sC_{GS}(Z_1 + Z_S)}{g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)}$，它取决于 $Z_1$、$Z_S$ 和频率。因此该引理一般不成立：一旦 $C_{GS}$ 中有电流流过，单独一个折算到栅极的电压 $I_n/g_m$ 就不再与漏极噪声电流等效。只有当 $|sC_{GS}(Z_1 + Z_S)| \ll 1$（低频或源阻抗较小）时引理才重新成立；当 $Z_1 = Z_S = 0$ 时它严格成立。

- [图 1]：栅极节点 $V_G = V_S\dfrac{sC_{GS}Z_1}{1 + sC_{GS}Z_1}$；沟道电流为 $g_m(V_G - V_S) - g_{mb}V_S - V_S/r_O + I_n$；对源极节点应用基尔霍夫电流定律（KCL）：沟道电流 + $C_{GS}$ 电流 = $V_S/Z_S$。漏极短路线中的电流等于沟道电流。
- [图 2]：$(V_n - V_G)/Z_1 = (V_G - V_S)sC_{GS}$，沟道电流为 $g_m(V_G - V_S) - g_{mb}V_S - V_S/r_O$，源极节点的 KCL 方程相同。
- 从物理上看，与栅极串联的 $V_n$ 还会驱动电流流过 $C_{GS}$（以及 $Z_1$），而漏源之间的电流 $I_n$ 不会；严格的栅极等效模型还需要在栅极处增加一个相关的噪声电流。
