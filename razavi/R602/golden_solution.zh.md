没有偶次谐波（特性是奇对称的）；三次谐波（third harmonic）占主导：$\mathrm{HD3} \approx V_m^2/[32(V_{GS}-V_{TH})^2] \approx 0.17\%$。把 $W/L$ 加倍会使其加倍（≈ 0.34%）；把 $I$（以及 $I_{SS}$）加倍会使其减半（≈ 0.084%）。
- 平衡时的过驱动电压（overdrive voltage）：$V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)} = 0.432$ V。
- $I_{D1}-I_{D2} = \tfrac12\mu_nC_{ox}\tfrac WL V_{in}\sqrt{4V_{ov}^2 - V_{in}^2} \approx \mu_nC_{ox}\tfrac WL V_{ov}V_{in}\left[1 - \dfrac{V_{in}^2}{8V_{ov}^2}\right]$；令 $V_{in} = V_m\cos\omega t$，并利用 $\cos^3 = (3\cos\omega t + \cos3\omega t)/4$，得 $\mathrm{HD3} \approx V_m^2/(32V_{ov}^2) = 0.01/(32\times0.1866) = 0.168\%$（精确的平方律特性给出 0.169%；五次谐波 ~$10^{-6}$）。
- W/L 加倍：$V_{ov} = 0.305$ V → 0.335%（精确值 0.34%）。I 加倍：$V_{ov} = 0.611$ V → 0.084%。HD3 $\propto (W/L)/I$。
- 作为对比，采用相同器件和电流的共源级（common-source stage）的 HD2 ≈ 5.8%。
