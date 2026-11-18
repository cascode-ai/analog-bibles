在 [图 1] 所示的假想带隙基准（bandgap reference）中，输出电压为 $V_{OUT} = V_{BE(\text{on})} + MV_T$，其中 $V_{BE(\text{on})}$ 是由电流 $I_1$ 偏置的二极管连接晶体管的基极-发射极电压，$M$ 是与温度无关的常数。在这种基准中，$I_1$ 通常做成与绝对温度成正比；现假设该电流由扩散电阻（diffused resistor）产生，因而其温度系数（temperature coefficient）为 $TC_F = (1/I_1)(dI_1/dT) = -1500$ ppm/°C。求在 25 °C 时使 $V_{OUT}$ 的 $TC_F$ 为零所需的 $V_{OUT}$ 值。忽略基极电流。

模型：$V_{BE(\text{on})} = V_T\ln(I_1/I_S)$，其中 $I_S \propto T^{\gamma}\exp(-V_{G0}/V_T)$，$\gamma = 3.2$，$V_{G0} = 1.205$ V；25 °C（$T = 298$ K）时 $V_T = kT/q = 25.7$ mV。
