[图 1] 所示为一个采用密勒补偿（Miller compensation）的两级运算放大器（two-stage op amp）的输出级：第一级用 $V_{in}$ 串联其输出电阻（output resistance）$R_S$ 来建模，$C_E$ 是 $M_9$ 栅极处的电容，补偿电容 $C_C$ 与电阻 $R_z$ 串联后接在 $M_9$ 的栅极与漏极之间，$R_L$ 和 $C_L$ 为输出端的负载。忽略 $M_9$ 的其他电容，证明传递函数 $V_{out}/V_{in}$ 的零点为
$$\omega_z \approx \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$
其中 $\omega_z$ 为正表示右半平面零点（right-half-plane zero），即分子形如 $1 - s/\omega_z$。提示：在零点频率处，即使输入不为零，输出电压也为零；将输出端对地短路，并要求流入短路线的电流为零。
