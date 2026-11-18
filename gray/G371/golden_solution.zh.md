$f \approx 100$ MHz。

- 低频：由互不相关的噪声发生器 $\overline{i_i^2} = 2q(I_B + I_C/\beta_0^2) + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F$ 和源噪声 $4kT/R_S$ 得 $F_0 \approx 4.0$（6.0 dB）（3.99；若 $\overline{v_{ia}^2}$ 经 $(1/R_S + 1/R_F)^2$ 折算则为 4.02）。保留 $r_b$、$R_F$ 和 $R_L$ 的噪声以及集电极散粒噪声相关性的完整节点分析给出 $F_0 \approx 4.2$（6.2 dB）和 $f \approx 101$ MHz，同样可以接受。若将 $R_F$ 视为无噪声，则得到 $F_0 \approx 3.0$–3.1 和 $f \approx 87$–89 MHz。
- 在高频下，折算到输入端的集电极散粒噪声（shot noise）增大：$2qI_C/|\beta(jf)|^2 = 2qI_C\left(\frac{1}{\beta_0^2} + \frac{f^2}{f_T^2}\right)$（采用常用的单极点模型 $\beta(jf) = \beta_0/(1 + j\beta_0 f/f_T)$，即忽略 $C_\mu$，且 $C_\pi \approx g_m/(2\pi f_T)$；节点分析得到的 101 MHz 也采用同一模型）。
- NF 高 3 dB 意味着 $F = 2F_0$：$2qI_C\frac{f^2}{f_T^2} = F_0\cdot\frac{4kT}{R_S}$ → $\frac{f}{f_T} = \sqrt{\frac{3.99\times1.66\times10^{-24}}{1.6\times10^{-22}}} = 0.203$ → $f \approx 102$ MHz。
