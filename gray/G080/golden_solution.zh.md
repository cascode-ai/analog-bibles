在 $V_{CE} = V_{BE}$ 时 $I_{OUT} \approx 2.12$ mA；计入厄利效应后，$V_{OUT} = 1$ V 时 $I_{OUT} \approx 2.13$ mA，5 V 时为 2.19 mA，30 V 时为 2.60 mA。输出电阻 $R_o = r_{o3}\|r_{o4}\|r_{o5} = V_A/I_{OUT} \approx 61$ kΩ。

- Q1 和 Q2 二极管连接（diode-connected）并联（输入侧），Q3–Q5 并联（输出侧），它们的 $V_{BE}$ 都相同：理想增益为 3/2。
- $I_{IN} = (15 - V_{BE})/10\ \mathrm{k\Omega}$，其中 $V_{BE} = V_T\ln(I_C/I_S) \approx 0.668$ V：$I_{IN} \approx 1.433$ mA。
- 输入节点的 KCL：$I_{IN} = 2I_C + 5I_C/\beta_F$，故 $I_C = I_{IN}/(2 + 5/\beta_F) = 0.708$ mA，$I_{OUT} = 3I_C = \dfrac{1.5\,I_{IN}}{1 + 2.5/\beta_F} = 2.123$ mA（比不计基极电流时的 2.150 mA 低 1.2 %）。
- 厄利效应：$I_{OUT} = 3I_C\,[1 + (V_{OUT} - V_{BE})/V_A]$：2.129 mA（1 V），2.194 mA（5 V），2.602 mA（30 V）。
- 每个输出晶体管的 $r_o = V_A/I_C \approx 184$ kΩ；三个并联得 $R_o = V_A/I_{OUT} \approx 61$ kΩ。（若用 $I_C = I_Se^{V_{BE}/V_T}(1 + V_{CE}/V_A)$，精确斜率给出 $R_o = (V_A + V_{OUT})/I_{OUT}(V_{OUT}) = V_A/(3I_Se^{V_{BE}/V_T}) \approx 61.5$ kΩ，与 $V_{OUT}$ 无关。）
