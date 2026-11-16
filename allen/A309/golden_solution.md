# Golden Solution - A309

## Reference answer

Both follow from: the servo forces $v_{OUT} = v_{SET}$; the supplies also move by $v_{SET}$, so relative to its own supplies the op amp under test sees only a common-mode input change of $-v_{SET}$; to keep its output fixed relative to its supplies it needs $v_I = v_{SET}/\mathrm{CMRR}$, and $v_{OS} \approx 1000\,v_I$.

- Auxiliary amp: its inverting input is a virtual ground and draws no current, so $v_{OUT}/100\,\mathrm{k} + (-v_{SET})/100\,\mathrm{k} = 0$ → $v_{OUT} = v_{SET}$.
- Supplies: positive rail $V_{DD} + v_{SET}$, negative rail $-V_{SS} + v_{SET}$. Shifting all voltages by $-v_{SET}$ (the op amp has no ground terminal), its supplies and output are unchanged while both inputs (at ≈ 0) are at $-v_{SET}$: a common-mode input $v_{ic} = -v_{SET}$ with zero output change.
- Op amp under test: $A_v v_{id} + A_c v_{ic} = 0$ → $v_{id} = A_c v_{SET}/A_v = v_{SET}/\mathrm{CMRR}$ (magnitudes; $v_{id}$ = $v_I$ minus the fixed input offset).
- Divider: $v_I = v_{OS}\cdot10/10010$ → $v_{OS} = 1001(v_{SET}/\mathrm{CMRR} + V_{off}) \approx 1000\,v_{SET}/\mathrm{CMRR} + 1001V_{off}$.
- (a) $V_{OS1} - V_{OS2} = 1000(+1 - (-1))\ \mathrm{V}/\mathrm{CMRR}$; the offset term cancels → $\mathrm{CMRR} = 2000\ \mathrm{V}/|V_{OS1}-V_{OS2}|$.
- (b) small signal: $v_{os} = 1000\,v_{icm}/\mathrm{CMRR}$ → $\mathrm{CMRR} = 1000\,v_{icm}/v_{os}$; sweeping the frequency of $v_{icm}$ gives CMRR(f) (as long as the servo loop keeps $v_{OUT} = v_{SET}$ at that frequency).
- The approximation 1001 ≈ 1000 introduces 0.1% error.

## Grading notes

Two parts, half each. +2: both relations derived with the key steps: servo forcing $v_{OUT} = v_{SET}$, the equal supply shift being a common-mode input of $v_{SET}$ relative to the supplies, $v_I = v_{SET}/\mathrm{CMRR}$, the 1/1001 ≈ 1/1000 divider, and (for (a)) cancellation of the offset by the ±1-V difference. +1: one part fully derived, the other asserted or with a minor gap. Asserting that changing the three sources together is a common-mode input of $v_{SET}$, without showing that both rails shift by $v_{SET}$ while $v_{OUT} = v_{SET}$ (so that the inputs move by $-v_{SET}$ relative to the supplies), is such a gap, as is omitting the offset cancellation in (a); an answer with either gap is at most +1. 0: only the divider factor explained. −2 (asserted as fact): $v_I = v_{SET}\cdot\mathrm{CMRR}$, the output claimed to stay at 0 V, the factor 1000 attributed to the auxiliary op amp's gain, or the supply movement treated as a differential input.
