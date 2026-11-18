$R = 3$。

- 尾电流为 $I_T$ 的 MOS 差分对（differential pair）有 $G_m = g_{m} = \sqrt{2k'(W/L)(I_T/2)} = \sqrt{k'(W/L)I_T}$（平方律，$g_m \propto \sqrt{I}$）。
- 两个对都工作（尾电流 $I_{B1} = I_{B2} = I_B$，$k'W/L$ 相等）：$G_m = 2\sqrt{k'(W/L)I_B}$。
- 只有一个对工作：尾电流为 $(1+R)I_B$，故 $G_m = \sqrt{k'(W/L)(1+R)I_B}$。
- 令两者相等：$1 + R = 4$，故 $R = 3$。由于 $g_m \propto \sqrt{I}$，要使一个对的跨导加倍需要四倍的电流：在工作对自身的 $I_B$ 之外，截止对的电流以 3 倍的增益被转移过来。
