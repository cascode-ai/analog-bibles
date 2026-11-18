$|V_{OS}| \approx 5.3$ mV（若 β 项保留为 $\ln(1 + 2/\beta_F)$，则 ≈ 5.0 mV），而不加电阻时为 ≈ 6.1 mV。

- $I_C = 50$ µA；$\alpha_F = 15/16 = 0.9375$；$g_mR/\alpha_F = (50\ \mu/26\ \mathrm{m})(2\ \mathrm{k})/0.9375 = 4.10$（发射极电阻上的压降 ≈ 107 mV）。
- 带发射极负反馈（emitter degeneration）时负载的失配：$\dfrac{\Delta I_C}{I_C} = \dfrac{1}{1 + g_mR/\alpha_F}\dfrac{\Delta I_S}{I_S} + \dfrac{g_mR/\alpha_F}{1 + g_mR/\alpha_F}\left(-\dfrac{\Delta R}{R} + \dfrac{\Delta\alpha_F}{\alpha_F}\right)$，其中 $\Delta\alpha_F/\alpha_F = (\Delta\beta_F/\beta_F)/(1+\beta_F) = 0.10/16 = 0.00625$。
- 最坏情况：$0.05/5.10 + (4.10/5.10)(0.005 + 0.00625) = 0.0098 + 0.0090 = 0.0188$。
- 基极电流项不变：$2/\beta_F = 0.133$；输入对管项为 0.05。
- $V_{OS} \approx V_T(0.05 + 0.0188 + 0.133) = 26\ \mathrm{mV}\times0.202 \approx 5.3$ mV。电阻使负载的贡献从 0.05 降到 0.019，但失调主要由 pnp 管有限的 β 决定。
