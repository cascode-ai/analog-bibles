$I_{OUT} \approx 10.9$ µA。

- 这是一个 Widlar 电流源（Widlar current source）：$I_{IN} = (15 - V_{BE1})/20\ \mathrm{k\Omega}$，其中 $V_{BE1} = V_T\ln(I_{IN}/I_S) \approx 0.668$ V，故 $I_{IN} \approx 0.717$ mA。
- KVL：$V_{BE1} - V_{BE2} = I_{OUT}R_2$，即 $V_T\ln(I_{IN}/I_{OUT}) = I_{OUT}(10\ \mathrm{k\Omega})$（忽略基极电流）。
- 迭代：$I_{OUT} = 10$ µA 时左边为 111 mV，右边为 100 mV；10.9 µA 时为 108.8 mV 对 109 mV → $I_{OUT} \approx 10.9$ µA（若用发射极电流 $(\beta_F+1)I_{OUT}/\beta_F$，则为 10.84 µA）。
