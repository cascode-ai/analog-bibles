漏极电流的三次谐波幅度：$\dfrac{\mu_0C_{ox}(W/L)\,\theta V_m^3}{8}$；输出电压的三次谐波幅度：该值的 $R_D$ 倍。相对于基波（fundamental）：$\mathrm{HD3} \approx \dfrac{\theta V_m^2}{8(V_{GS0}-V_{TH})}$。
- 令 $V = V_{GS}-V_{TH} = V_0 + V_m\cos\omega t$（$V_0 = V_{GS0}-V_{TH}$），$k_0 = \mu_0C_{ox}W/L$：$I_D = \dfrac{k_0V^2}{2(1+\theta V)} \approx \dfrac{k_0}{2}(V^2 - \theta V^3)$。
- 只有三次项产生三次谐波：$-\tfrac{k_0\theta}{2}V_m^3\cos^3\omega t$ 中含有 $-\tfrac{k_0\theta V_m^3}{8}\cos3\omega t$。
- 基波：$k_0V_0V_m - \tfrac{k_0\theta}{2}\left(3V_0^2V_m + \tfrac34V_m^3\right) \approx k_0V_0V_m(1 - \tfrac32\theta V_0)$，因此 HD3 $= \dfrac{\theta V_m^2}{8V_0(1-1.5\theta V_0)} \approx \dfrac{\theta V_m^2}{8V_0}$。
- 因此，迁移率退化（mobility degradation）给原本纯二次的放大级增加了奇次失真。
