# Golden Solution - R464

## Reference answer

Roughly from $V_{DD} - 0.4$ V (about a diode turn-on below $V_{DD}$) up to $V_{DD}$ (or up to where $M_1$/$M_2$ would turn off, if a higher input level were available): a narrow range near the positive supply.

- Lower limit: the n-well forms a p+/n junction with the p+ source at $V_{DD}$. If $V_{in,CM}$ drops more than a few hundred millivolts below $V_{DD}$ this junction forward-biases, drawing input current (and risking latch-up), so $V_{in,CM} \gtrsim V_{DD} - (0.3\text{–}0.5\ \mathrm{V})$.
- The other junctions are safe: well to p+ drain is reverse biased because the drains sit well below $V_{DD}$, and well to p-substrate is reverse biased for any positive input.
- If no forward bias at all is tolerated, the lower limit is $V_{in,CM} \ge V_{DD}$; the 0.3–0.5 V allowance is an engineering estimate (it depends on the input current that can be tolerated), so a limit stated as $V_{DD} - V_{D,on}$ with $V_{D,on}$ ≈ 0.3–0.6 V is equally valid.
- Upper limit: raising the well above the source only increases $|V_{TH}| = 0.8 + 0.4(\sqrt{0.8 + V_{in,CM} - V_{DD}} - \sqrt{0.8})$ and reduces the current; the devices stay on until $|V_{TH}|$ reaches $V_{DD} - V_{b1}$, i.e. $V_{in,CM} < V_{DD} - 0.8 + [\sqrt{0.8} + (V_{DD} - V_{b1} - 0.8)/0.4]^2$ (volts). With inputs confined to the supply rails the upper limit is simply $V_{DD}$; if a higher input level is available, the body-effect turn-off (and well breakdown) sets it.
- Because there is no tail current source, the drain currents of $M_1$/$M_2$ change with $V_{in,CM}$ while $M_3$/$M_4$ are fixed. Within this range the output CM level must be held by common-mode feedback (e.g., adjusting $V_{b1}$ or $V_{b2}$); otherwise even small CM changes saturate the outputs.

## Grading notes

+2: lower limit set by forward biasing of the source–well (p+/n) junction, ≈ $V_{DD}$ − 0.3…0.6 V (or strictly $V_{in,CM} \ge V_{DD}$, or $V_{DD} - V_F$ with $V_F$ stated as an unspecified diode allowance), and an upper limit at ≈ $V_{DD}$ (or device turn-off when $|V_{TH}| \to V_{DD} - V_{b1}$, written as a correct body-effect bound above $V_{DD}$), i.e. a range at or near $V_{DD}$. An answer that says no unique numerical range follows from the data and gives these conditional bounds correctly earns +2. Mentioning the need for CMFB because there is no tail source is a plus. +1: the forward-bias lower limit identified but the upper limit missing or vague. 0: only the general statement that the bulk–source junction must stay off, without placing the range near $V_{DD}$. -2 (asserted as fact): a rail-to-rail or near-ground input range for this circuit as drawn (ignoring the forward-biased junction), or limits derived as for a gate-driven pair ($V_{in,CM} \le V_{DD} - |V_{GS}| - \dots$).
