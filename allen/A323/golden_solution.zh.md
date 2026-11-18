GB(max) ≈ $1.43\times10^8$ rad/s（≈ 22.8 MHz）；$C_L(\min) \approx 3.45$ pF。

- 60° 裕度：$2\tan^{-1}\frac{GB}{0.702\,\mathrm{G}} + \tan^{-1}\frac{GB}{1.652\,\mathrm{G}} + \tan^{-1}\frac{GB}{4.176\,\mathrm{G}} + \tan^{-1}\frac{GB}{555\,\mathrm{G}} = 30°$ → GB = 143 Mrad/s。
- $|p_d| = GB/A_{vd}(0) = 143\times10^6/3678 = 38.9\times10^3$ rad/s → $C_L = 1/(|p_d|R_{out}) = 1/(38.9\times10^3\times7.44\times10^6) = 3.45$ pF。更小的 $C_L$ 会提高 GB，使相位裕度降到 60° 以下。
- （原设计：$C_L$ = 10 pF 时 GB = 3678/(7.44 MΩ·10 pF) = 49 Mrad/s，即 7.9 MHz，因此 GB 提高约 ×2.9。）
- 若在精确的单位增益穿越频率处计算相位，则 GB ≈ 150 Mrad/s，$C_L$ ≈ 3.3 pF。
