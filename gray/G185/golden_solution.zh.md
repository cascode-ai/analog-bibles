$|p_2| \approx 4.4\times10^{10}$ rad/s，即约 7.0 GHz（由二次方程求得的精确值：$4.38\times10^{10}$ rad/s，6.97 GHz）。

- $g_m = 1.94$ mA/V，$C_{gs} = 74.7$ fF，$C_{gd} = 14$ fF。
- 电路有两个极点；分母为 $1 + s(C_{gd}R_L + C_{gd}R_S + C_{gs}R_S + g_mR_LR_SC_{gd}) + s^2R_LR_SC_{gd}C_{gs}$。在极点相距很远时，$p_1p_2 = 1/(R_LR_SC_{gd}C_{gs})$，由此得
  $|p_2| = \dfrac{1}{R_LC_{gd}} + \dfrac{1}{R_SC_{gs}} + \dfrac{1}{R_LC_{gs}} + \dfrac{g_m}{C_{gs}} = (1.43\times10^{10}) + (1.34\times10^{9}) + (2.68\times10^{9}) + (2.59\times10^{10}) = 4.42\times10^{10}$ rad/s。
- $f_2 = 7.04$ GHz。主极点（dominant pole）位于 $\approx 4.3\times10^8$ rad/s（69 MHz），因此两个极点确实相距很远，与假设一致。$|p_2|$ 超过了 $\omega_T = g_m/(C_{gs}+C_{gd}) = 2.18\times10^{10}$ rad/s。
