# Golden Solution - G148

## Reference answer

The nominal open-loop gain must be at least about $2.0\times10^6$, so that even its lowest value ($-50\,\%$, i.e. about $1.0\times10^6$) gives a gain error of no more than 0.1 %.

- Let the 1-kΩ and 1-MΩ resistors be $R_1$ and $R_2$. With finite gain $a$: $V_+ = V_{bot}R_2/(R_1+R_2)$ and $V_- = V_{top}R_2/(R_1+R_2) + V_oR_1/(R_1+R_2)$, where $V_{top}$ and $V_{bot}$ are the voltages of the top and bottom input terminals. Then $V_o = a(V_+ - V_-)$ gives
  $V_o = -\dfrac{R_2}{R_1}\,v_{in}\cdot\dfrac{1}{1 + \dfrac{R_1+R_2}{aR_1}}$ with $v_{in} = V_{top} - V_{bot}$.
- Ideal gain $R_2/R_1 = 1000$. Relative error $\epsilon = \dfrac{1}{1 + aR_1/(R_1+R_2)} \approx \dfrac{1001}{a}$.
- $\epsilon \le 10^{-3}$ requires $aR_1/(R_1+R_2) \ge 999$, i.e. $a \ge 999\times1001 \approx 1.0\times10^6$.
- This must hold at the low end of the tolerance range ($a = 0.5\,a_{nom}$), so $a_{nom} \ge 2.0\times10^6$ (the +100 % end only reduces the error).

## Grading notes

+2: worst-case reasoning giving a minimum gain of about $10^6$ at the low end and a nominal value of about $2\times10^6$ (either number may be given as "the answer" if the relation to the tolerance is made explicit); within ±5 %. +1: an explicitly stated alternative reading in which the nominal error is trimmed out and only the variation over the tolerance range must stay within 0.1 % (giving a nominal gain of about $1.5\times10^6$), with correct algebra; or the right worst-case number with the error formula only roughly justified. 0: $a \approx 10^6$ found but the −50 % tolerance ignored, or the right method with an arithmetic slip. -2 (asserted as fact): wrong feedback factor (e.g. error $= 1000/a$ or $1/a$ leading to $a \approx 10^3$ or $10^5$), the tolerance applied in the wrong direction (using the +100 % value as the worst case), or the gain formula of a noninverting amplifier misapplied so that the answer is off by orders of magnitude.
