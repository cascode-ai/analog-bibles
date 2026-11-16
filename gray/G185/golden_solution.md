# Golden Solution - G185

## Reference answer

$|p_2| \approx 4.4\times10^{10}$ rad/s, i.e. about 7.0 GHz (exact value from the quadratic: $4.38\times10^{10}$ rad/s, 6.97 GHz).

- $g_m = 1.94$ mA/V, $C_{gs} = 74.7$ fF, $C_{gd} = 14$ fF.
- The circuit has two poles; the denominator is $1 + s(C_{gd}R_L + C_{gd}R_S + C_{gs}R_S + g_mR_LR_SC_{gd}) + s^2R_LR_SC_{gd}C_{gs}$. With widely separated poles, $p_1p_2 = 1/(R_LR_SC_{gd}C_{gs})$, which gives
  $|p_2| = \dfrac{1}{R_LC_{gd}} + \dfrac{1}{R_SC_{gs}} + \dfrac{1}{R_LC_{gs}} + \dfrac{g_m}{C_{gs}} = (1.43\times10^{10}) + (1.34\times10^{9}) + (2.68\times10^{9}) + (2.59\times10^{10}) = 4.42\times10^{10}$ rad/s.
- $f_2 = 7.04$ GHz. The dominant pole is at $\approx 4.3\times10^8$ rad/s (69 MHz), so the poles are widely separated, as assumed. $|p_2|$ exceeds $\omega_T = g_m/(C_{gs}+C_{gd}) = 2.18\times10^{10}$ rad/s.

## Grading notes

+2: $|p_2|$ between $4.2\times10^{10}$ and $4.6\times10^{10}$ rad/s (6.7–7.3 GHz), from the coefficient-matching formula, an exact solution of the quadratic, or short-circuit time constants (which give the same sum). +1: correct method and value with a minor slip or rad/s–Hz confusion stated inconsistently but with the correct final number. 0: correct formula with an arithmetic error giving a wrong value, or only the formula without a number. −2 (asserted as fact): $p_2$ taken as $1/(R_LC_{gd})$ alone or as $\omega_T$, the dominant pole reported as the nondominant one, or a value below the dominant pole.
