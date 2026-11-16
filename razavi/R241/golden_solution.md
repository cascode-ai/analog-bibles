# Golden Solution - R241

## Reference answer

$V_{out}$ is about 18.5 mV below $V_F$ ($V_{out} - V_F \approx -g_{m4}(r_{O2}\|r_{O4})\times 1\ \mathrm{mV}$; ≈ −24 mV if the $(1+\lambda V_{DS})$ factors are kept in $r_O$ and $g_m$).

- With perfect matching $V_{out} = V_F$ by symmetry. The larger $|V_{TH4}|$ reduces $M_4$'s current by $g_{m4}\times 1$ mV for the same $V_{SG}$.
- At the output, the deficit must be absorbed by the output resistance of the OTA, $R_{out} \approx r_{O2}\|r_{O4}$: $\Delta V_{out} = -g_{m4}(r_{O2}\|r_{O4})(1\ \mathrm{mV})$, while $V_F$ barely moves.
- Each branch carries 0.25 mA: $g_{m4} = \sqrt{2(38.4\ \mu)(100)(0.25\ \mathrm{m})} = 1.39$ mS; $r_{O2} = 40$ kΩ, $r_{O4} = 20$ kΩ, $r_{O2}\|r_{O4} = 13.3$ kΩ; $g_{m4}(r_{O2}\|r_{O4}) = 18.5$ → −18.5 mV.
- A large-signal solution with $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2(1+\lambda V_{DS})$ gives −24.5 mV (larger effective $r_O$ and $g_m$).

## Grading notes

+2: $V_{out}$ lower than $V_F$ by 15–27 mV, via $g_{m4}(r_{O2}\|r_{O4})\Delta V_{TH}$ (or the input-referred view $\Delta V_{TH}\,g_{m4}/g_{m1}$ times the gain $g_{m1}(r_{O2}\|r_{O4})$). +1: correct magnitude but the sign wrong or not stated, or the magnitude off by up to a factor 1.5 through $R_{out}$ choice. 0: correct mechanism but $R_{out}$ taken as $r_{O4}$ alone or with a numerical error beyond that. -2 (asserted as fact): deviation of only 1 mV (no gain), zero deviation, or a value of hundreds of mV from using $g_{m}r_{O}$ of a single device with the wrong λ.
