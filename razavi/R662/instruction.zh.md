[图 1] 给出了一个锁相环（PLL），其中外部电压 $V_{ex}$ 与环路滤波器（loop filter）的输出相加，形成压控振荡器（VCO）的控制电压。假设把该 PLL 改为 [图 2] 所示的电荷泵（charge pump）结构：
- 鉴频鉴相器（PFD）驱动一个电流为 $I_1 = I_2 = I_P$ 的电荷泵；
- 电荷泵驱动一个由 $R_P$ 与 $C_P$ 串联构成的环路滤波器；
- $V_{ex}$ 仍与环路滤波器的输出相加，形成 $V_{cont}$；
- VCO 满足 $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$。

利用 PFD/电荷泵的连续时间（平均）模型，求传递函数 $\Phi_{out}(s)/V_{ex}(s)$，其中 $\Phi_{out}$ 表示 $V_{out}$ 的剩余相位（excess phase），输入为纯净的周期信号。
