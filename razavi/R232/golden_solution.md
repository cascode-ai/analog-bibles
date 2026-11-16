# Golden Solution - R232

## Reference answer

$I_T \approx 0.46$ mA (≈ 464 μA), and $M_3$/$M_4$ carry only ≈ 34 μA each instead of 50 μA (about 30% less).

- Each mirror ratio is multiplied by $(1+\lambda V_{DS,out})/(1+\lambda V_{DS,in})$. $M_0$: $V_{DS} = V_{GS0} \approx 0.96$ V. Tail: $V_{DS} = V_P \approx 0.18$ V → $I_T = 500\ \mu\mathrm{A}\times\frac{1+0.1(0.18)}{1+0.1(0.96)} \approx 464\ \mu$A.
- $2(W/L)_N$ device: $V_{DS} = V_{DD} - |V_{GS,ref}| \approx 1.55$ V → $200\ \mu\mathrm{A}\times\frac{1.155}{1.096} \approx 211\ \mu$A through the PMOS reference diode ($|V_{GS}| \approx 1.45$ V).
- $M_5$: $V_{SD5} = V_{DD} - V_{D3} \approx 1.07$ V vs 1.45 V for the reference diode → $I_{D5} \approx 211\times\frac{1+0.2(1.07)}{1+0.2(1.45)} \approx 198\ \mu$A.
- $M_3$: $I_T/2 - I_{D5} \approx 232 - 198 \approx 34\ \mu$A (drain ≈ 1.93 V). A full self-consistent solution gives 464 μA and 33.9 μA. The small difference current is very sensitive: few-percent errors in $I_T/2$ and $I_{D5}$ become a 30% error in the load current.
- (If the tail's triode operation at $V_P \approx 0.18$ V is taken into account, $I_T \approx 0.43$ mA and $M_3$/$M_4$ get ≈ 19 μA.)

## Grading notes

+2: $I_T$ in 455–470 μA (below 500 μA because the tail's $V_{DS} = V_P$ is much smaller than $M_0$'s $V_{DS} = V_{GS0}$) and $M_3$/$M_4$ current in 28–40 μA, obtained by correcting each mirror with $(1+\lambda V_{DS})$ ratios; an answer that accounts for the tail's triode operation (≈ 0.43 mA, ≈ 19 μA) is also +2. +1: $I_T$ right and the direction/magnitude of the load-current error right but with a slip outside the range, or $M_5$/$M_6$ correction omitted with a stated simplification; also +1 (not capped at 0) when a slip in one device equation (e.g., a PMOS overdrive written with the node voltage instead of $V_{SG}$) still leaves both currents inside the +2 ranges. 0: $I_T$ right but the load current left at 50 μA or not computed. -2 (asserted as fact): $I_T$ above 500 μA (wrong sign of the λ correction), $\lambda$ applied as a divisor or as $1-\lambda V_{DS}$ with large error, or the load current claimed to increase.
