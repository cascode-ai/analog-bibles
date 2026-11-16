# Golden Solution - R152

## Reference answer

The PMOS plots are the NMOS plots mirrored about $V_{in,CM} = V_{DD}/2$ (high and low CM swap roles), with the outputs referred to ground.
- $I_{D1} = I_{D2}$: zero for $V_{in,CM} > V_{DD} - |V_{TH1}|$ (≈ 2.2 V; $M_1$, $M_2$ off, $M_3$ in deep triode with $V_P \approx V_{DD}$); rising as $V_{in,CM}$ decreases below that ($M_3$ in triode, acting as a resistor); flat at $I_{SS}/2$ once $M_3$ saturates, i.e. for $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$.
- $V_P$: equal to $V_{DD}$ while the pair is off; for lower $V_{in,CM}$ the pair acts as a source follower, $V_P = V_{in,CM} + |V_{GS1}|$, a line of slope ≈ 1 that bends up toward $V_{DD}$ as $V_{in,CM}$ approaches $V_{DD} - |V_{TH1}|$ (the mirror image of the NMOS $V_P$ curve, offset upward by $|V_{GS1}|$ instead of downward).
- $V_{out1} = V_{out2} = R_DI_{D}$: 0 for $V_{in,CM} > V_{DD} - |V_{TH1}|$, rising as $V_{in,CM}$ decreases, constant at $R_DI_{SS}/2$ for $V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$.
- Lower limit of the useful CM range: $M_1$, $M_2$ stay saturated only for $V_{in,CM} \ge R_DI_{SS}/2 - |V_{THP}|$ (if this is positive); below it the CM curves are unchanged but the differential gain drops. So the allowable range is $R_DI_{SS}/2 - |V_{TH1}| \le V_{in,CM} \le V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$.
- (If the PMOS bulks are tied to $V_{DD}$, body effect raises $|V_{TH1}|$ as $V_P$ falls below $V_{DD}$; this shifts the break points slightly.)

## Grading notes

+2: all three plots mirrored correctly: currents flat at $I_{SS}/2$ at low $V_{in,CM}$ and falling to zero near $V_{DD} - |V_{THP}|$; $V_P$ tracking $V_{in,CM} + |V_{GS}|$ and saturating at $V_{DD}$; outputs at $R_DI_{SS}/2$ for low CM falling to 0 at high CM; break points $V_{DD} - |V_{TH1}|$ and $V_{DD} - |V_{GS1}| - |V_{GS3} - V_{TH3}|$. Mentioning the lower CM limit is a plus. +1: plots right but one break point expression wrong or missing. 0: one or two of the three plots right. -2 (asserted as fact): the NMOS plots reproduced unchanged (current turning on at $V_{TH}$ as CM rises), outputs near $V_{DD}$ for a PMOS pair with grounded loads, or $V_P$ below $V_{in,CM}$.
