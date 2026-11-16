# Golden Solution - A264

## Reference answer

- For p-channel devices in saturation, $I = \frac{K'_P}{2}S(V_{SG} - |V_{TP}|)^2$, so $V_{SG4} = V_{SG6}$ requires equal overdrive, i.e. equal current per unit W/L: $\dfrac{I_6}{S_6} = \dfrac{I_4}{S_4}$ → $\dfrac{S_6}{S_4} = \dfrac{I_6}{I_4}$.
- The tail current splits equally at balance: $I_4 = I_5/2$.
- M6 and M7 are in series: $I_6 = I_7$. M5 and M7 have the same $V_{GS}$, so $I_7/I_5 = S_7/S_5$.
- Hence $\dfrac{S_6}{S_4} = \dfrac{I_7}{I_5/2} = 2\dfrac{S_7}{S_5}$.

## Grading notes

+2: equal-overdrive condition giving $S_6/S_4 = I_6/I_4$, plus $I_4 = I_5/2$, $I_6 = I_7$ and $I_7/I_5 = S_7/S_5$. +1: correct chain with one step only asserted. 0: correct final relation quoted with an incomplete or partly wrong argument. −2 (asserted as fact): $S_6/S_4 = S_7/S_5$ (missing factor 2) or $I_4 = I_5$.
