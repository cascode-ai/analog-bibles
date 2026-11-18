$GB = A_v(0)\,|p_1| \cong g_{mI}/C_c$。

- 直流增益：$A_v(0) = g_{mI}g_{mII}R_IR_{II}$。
- 主极点（极点相距很远，$s$ 系数中密勒项占主导）：$|p_1| \cong 1/(g_{mII}R_IR_{II}C_c)$。
- 当 $|p_1| \ll \omega$ 且频率低于次极点和零点时，$|A_v(j\omega)| \approx A_v(0)|p_1|/\omega$，它在 $\omega = GB = A_v(0)|p_1| = \dfrac{g_{mI}g_{mII}R_IR_{II}}{g_{mII}R_IR_{II}C_c} = \dfrac{g_{mI}}{C_c}$ 处等于 1。
- 等效的看法：在 $|p_1|$ 以上，密勒电容使节点 1 接近虚地，第二级相当于一个积分器，因此 $v_{out} \approx g_{mI}v_{in}/(sC_c)$；其幅值在 $g_{mI}/C_c$ 处降为单位幅值。对于 CMOS 运放，$g_{mI} = g_{m1} = g_{m2}$。
