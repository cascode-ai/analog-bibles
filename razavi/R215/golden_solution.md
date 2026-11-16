# Golden Solution - R215

## Reference answer

$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\dfrac{2(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V}$, which for $|I_{D5}| = 0.8I_{D1}$ ($I_{D1} = I_{SS}/2$) becomes $\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\dfrac{|V_{GS5} - V_{TH5}|}{4\Delta V}$.
- The mismatch changes the dc currents of $M_5$, $M_6$ by $\pm\Delta I/2$ with $\Delta I = g_{m5}\Delta V$. Since $I_{D1} = I_{D2}$ (equal gate voltages, λ = 0), the diode loads carry $I_3 = I_0 - \Delta I/2$ and $I_4 = I_0 + \Delta I/2$, with $I_0 = I_{D1} - |I_{D5}|$.
- The diodes' small-signal resistances $1/g_{m3}$, $1/g_{m4}$ ($g_m \propto \sqrt{I}$) therefore differ: $\Delta(1/g_m)/(1/g_m) \approx \Delta I/(2I_0)$. ($M_5$, $M_6$ themselves carry no signal current for λ = 0.)
- A CM input changes each input-device current by $g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$, so $A_{CM-DM} = \dfrac{g_{m1}}{1 + 2g_{m1}R_{SS}}\left(\dfrac{1}{g_{m3}} - \dfrac{1}{g_{m4}}\right)$, while $A_{DM} \approx g_{m1}/g_{m3}$.
- Ratio: CMRR $= (1 + 2g_{m1}R_{SS})\cdot 2I_0/\Delta I$. With $|I_{D5}| = 0.8I_{D1}$, $g_{m5} = 2|I_{D5}|/|V_{GS5} - V_{TH5}|$ and $I_0 = |I_{D5}|/4$, giving the second form. The mismatch is amplified because the diodes carry only 20% of the current.

## Grading notes

+2: mechanism (VTH mismatch of $M_5$/$M_6$ → dc current mismatch $g_{m5}\Delta V$ in the diode loads → unequal $1/g_{m3}$, $1/g_{m4}$) and CMRR ≈ $(1 + 2g_{m1}R_{SS})\cdot2I_0/(g_{m5}\Delta V)$ or an equivalent form (e.g., $(1 + 2g_{m1}R_{SS})\,g_{m3}/\Delta g_{m3}$ with $\Delta g_{m3} = g_{m5}\Delta V/|V_{GS3} - V_{TH3}|$). +1: correct mechanism and structure with a factor-2 slip. 0: correct structure ($A_{CM-DM}$ from a load mismatch over $1 + 2g_mR_{SS}$) but the load mismatch not related to $\Delta V$. -2 (asserted as fact): CMRR infinite because $M_5$/$M_6$ are ideal current sources, the mismatch treated as an input-pair $g_m$ mismatch, or the load mismatch taken as $\Delta I/I_{D5}$ (missing that only the diode current changes).
