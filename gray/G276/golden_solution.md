# Golden Solution - G276

## Reference answer

$T \approx 27.5$, $v_o/i_i \approx -1.93$ kΩ, $R_{in} \approx 50.7$ Ω, $R_{out} \approx 34.7$ Ω.

- $g_m = 38.46$ mS, $r_\pi = 5.2$ kΩ, $r_o = 100$ kΩ.
- Loading: input $R_F\|r_\pi = 1444$ Ω; output $R_L\|R_F\|r_o = 990$ Ω; $f = -1/R_F$.
- $a = -1444\times38.46\text{m}\times990 = -55.0$ kΩ; $T = 27.5$; $A = -55.0\text{k}/28.5 = -1930$ Ω.
- $R_{in} = 1444/28.5 = 50.7$ Ω; $R_{out} = 990/28.5 = 34.7$ Ω.

## Grading notes

Four quantities. +2: $T$ 26–29, gain −1.90 to −1.96 kΩ, $R_{in}$ 49–52 Ω, $R_{out}$ 33.5–36 Ω. +1: one value off by a slip, or $r_o$ neglected (changes results by ≈ 1%, acceptable as +2 if in range). 0: two of four right. −2 (asserted as fact): $r_\pi$ ignored at the input (T ≈ 38), impedances multiplied by $(1+T)$, or positive gain.
