[图 1] 所示电路用作带隙基准（bandgap reference）。若运算放大器（op amp）是理想的，其差模输入电压和输入电流都为零，且
$V_{OUT} = V_{BE1} + I_1R_1 = V_{BE1} + I_2R_2$，因此 $V_{OUT} = V_{BE1} + R_2\left(\dfrac{V_{BE1} - V_{BE2}}{R_3}\right)$。
假设要使 $I_1$ 等于 200 µA，$V_{BE1} - V_{BE2}$ 等于 100 mV。求在 25 °C 时使 $V_{OUT}$ 的 $TC_F$ 为零的 $R_1$、$R_2$ 和 $R_3$。忽略基极电流。

$Q_1$ 和 $Q_2$ 是相同的 npn 晶体管，25 °C 时 $I_S = 5\times10^{-15}$ A；$V_{BE} = V_T\ln(I_C/I_S)$，其中 $I_S \propto T^{\gamma}\exp(-V_{G0}/V_T)$，$\gamma = 3.2$，$V_{G0} = 1.205$ V；25 °C（$T = 298$ K）时 $V_T = 25.7$ mV。电阻与温度无关。
