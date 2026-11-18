$dV_{OUT}/dT = -(k/q)\ln2 \approx -60\ \mu\mathrm{V/°C}$（≈ −0.06 mV/°C，约 −47 ppm/°C），与 γ 和 $V_{G0}$ 无关。

- 当 $V_{OS} = 0$ 时，运放使 $R_1$ 和 $R_2$ 上的电压相等，故 $I_1/I_2 = R_2/R_1$，且 $V_{R3} = V_{EB1} - V_{EB2} = V_T\ln\left(\dfrac{I_1}{I_2}\dfrac{I_{S2}}{I_{S1}}\right)$，$V_{OUT} = V_{EB2} + (1 + R_2/R_3)\Delta V_{EB}$。
- 两个饱和电流都加倍时，$\Delta V_{EB}$、各电流以及 PTAT 项都不变，但在任何温度下 $V_{EB2}$ 都降低 $V_T\ln2$（≈ 17.8 mV）。
- 因此 $V_{OUT}(T) = V_{OUT,\text{nom}}(T) - (kT/q)\ln2$；由于 25 °C 时 $dV_{OUT,\text{nom}}/dT = 0$，故 $dV_{OUT}/dT = -(k/q)\ln2 = -59.7\ \mu\mathrm{V/K}$。（等价地，输出比目标值低 17.8 mV，且 $dV/dT \approx \Delta V/T = -17.8\ \mathrm{mV}/298\ \mathrm{K}$。）
