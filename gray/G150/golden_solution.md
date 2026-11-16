# Golden Solution - G150

## Reference answer

$R_2 \le 100\ \mathrm{k\Omega}$ and $R_1 = R_2/10 \le 10\ \mathrm{k\Omega}$; for example $R_1 = 10$ kΩ, $R_2 = 100$ kΩ (or any smaller pair with the ratio 10).

- Gain: with infinite open-loop gain, $V_o = (R_2/R_1)(V_1 - V_2)$, so $R_2/R_1 = 10$.
- Offset current: with $V_1 = V_2 = 0$, both inputs see $R_1 \parallel R_2$. The equal (average) part of the bias currents produces equal drops and cancels. The difference gives $V_O = (I_{B2} - I_{B1})R_2 = -I_{OS}R_2$, where $I_{B1}$ flows into the noninverting input and $I_{B2}$ into the inverting input.
- $|V_O| = |I_{OS}|R_2 \le 10\ \mathrm{mV}$ gives $R_2 \le 10\ \mathrm{mV}/100\ \mathrm{nA} = 100\ \mathrm{k\Omega}$, so $R_1 \le 10$ kΩ.

## Grading notes

+2: ratio $R_2/R_1 = 10$ and $R_2 \le 100$ kΩ (hence $R_1 \le 10$ kΩ), from $|V_O| = |I_{OS}|R_2$; any valid pair (e.g. 10 kΩ/100 kΩ) is accepted. +1: correct pair but the offset relation stated only loosely, or the bound given as $R_1 \le 10$ kΩ with the ratio right but the $R_2$ derivation missing. 0: correct ratio but the offset bound wrong through an arithmetic slip (e.g. 10 kΩ for $R_2$). -2 (asserted as fact): the ratio inverted ($R_1 = 10R_2$), $V_O = I_{OS}R_1$ leading to $R_1 \le 100$ kΩ, or the claim that the offset current produces no output because the configuration is balanced.
