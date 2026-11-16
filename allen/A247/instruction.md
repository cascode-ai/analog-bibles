A Miller-compensated two-stage op amp is modeled by a first stage (transconductance $g_{mI}$ driving node 1, which has resistance $R_I$ and capacitance $C_I$ to ground) and a second stage (transconductance $g_{mII}$ controlled by the node-1 voltage, driving the output node with $R_{II}$ and $C_{II}$ to ground), with the compensation capacitor $C_c$ connected between node 1 and the output. Its transfer function is

$\dfrac{V_o(s)}{V_{in}(s)} = \dfrac{g_{mI}g_{mII}R_IR_{II}\,(1 - sC_c/g_{mII})}{1 + s[R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c] + s^2R_IR_{II}[C_IC_{II} + C_cC_I + C_cC_{II}]}$.

Develop from this transfer function the expressions for the dominant pole, $p_1 \cong \dfrac{-1}{g_{mII}R_IR_{II}C_c}$, and for the output pole, $p_2 \cong \dfrac{-g_{mII}C_c}{C_IC_{II} + C_{II}C_c + C_IC_c}$, stating the approximations used.
