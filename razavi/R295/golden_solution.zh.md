$$Z_{in} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right) = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}$$
若忽略体效应（body effect），则简化为 $Z_{in} = \dfrac{1}{g_m} + \dfrac{1}{C_2s}$。$C_1$ 不出现在结果中。

推导：测试电流 $I_x$ 流入 $M_1$ 的源极，必然经沟道流到漏极（按从漏极到源极的方向，$I_D = -I_x$）。在漏极节点，$I_1$ 是理想的，因此该电流只能继续经 $C_1$ 流入栅极节点，再经 $C_2$ 流到地（栅极不吸取电流）。因此 $V_G = I_x/(C_2s)$。沟道电流为 $g_m(V_G - V_S) - g_{mb}V_S = -I_x$，由此得 $V_S = [I_x + g_mV_G]/(g_m + g_{mb}) = \dfrac{I_x}{g_m + g_{mb}}\left(1 + \dfrac{g_m}{C_2s}\right)$。
