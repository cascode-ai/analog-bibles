$F \approx 4.0$，即 NF ≈ 6.0 dB（包含噪声发生器相关性的精确节点噪声分析给出 ≈ 6.2 dB）。

- 晶体管：$g_m = 19.2$ mS，$\overline{v_{ia}^2} = 4kT(r_b + 1/2g_m) = 4kT(126\ \Omega) = 2.09\times10^{-18}$ V²/Hz，$\overline{i_{ia}^2} = 2q(I_B + I_C/\beta^2) = 3.2\times10^{-24} + 6.4\times10^{-26} = 3.26\times10^{-24}$ A²/Hz（$I_B = 10\ \mu$A）。
- 输入端的并联反馈：$\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F = 3.26\times10^{-24} + 2.1\times10^{-26} + 1.66\times10^{-24} = 4.95\times10^{-24}$ A²/Hz；$\overline{v_i^2} \approx \overline{v_{ia}^2}$。
- 计入电流源和 $R_S$：$F = 1 + \dfrac{\overline{i_i^2} + \overline{v_i^2}/R_S^2}{4kT/R_S} = 1 + \dfrac{4.97\times10^{-24}}{1.66\times10^{-24}} = 3.99$ → 6.0 dB。基极电流散粒噪声（shot noise）和反馈电阻的噪声占主导。
