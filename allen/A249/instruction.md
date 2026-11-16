A Miller-compensated two-stage op amp is modeled by a first stage of transconductance $g_{mI}$ (output resistance $R_I$, capacitance $C_I$ at node 1) driving a second stage of transconductance $g_{mII}$ (output resistance $R_{II}$, capacitance $C_{II}$ at the output), with the compensation capacitor $C_c$ between node 1 and the output. Its transfer function is

$\dfrac{V_o(s)}{V_{in}(s)} = \dfrac{g_{mI}g_{mII}R_IR_{II}\,(1 - sC_c/g_{mII})}{1 + s[R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c] + s^2R_IR_{II}[C_IC_{II} + C_cC_I + C_cC_{II}]}$.

Derive the relationship for the unity-gain bandwidth, $GB \cong g_{mI}/C_c$ (for the CMOS two-stage op amp with input pair M1–M2, $GB \cong g_{m1}/C_c = g_{m2}/C_c$).
