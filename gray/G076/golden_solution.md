# Golden Solution - G076

## Reference answer

$|V_{OS}| \approx V_T\,\Delta W_B/W_B = 26\ \mathrm{mV} \times 0.1 \approx 2.6$ mV ($V_T \ln 1.1 = 2.5$ mV if the 10% is taken relative to one device).

- For a uniform base, $I_S = q n_i^2 D_n A/(N_A W_B)$, so $I_S \propto 1/W_B$ and $\Delta I_S/I_S = -\Delta W_B/W_B$.
- With equal $R_C$, zero differential output requires $I_{C1} = I_{C2}$, so $V_{OS} = V_{BE1} - V_{BE2} = V_T \ln(I_{S2}/I_{S1}) = V_T \ln(W_{B1}/W_{B2})$.
- 10% mismatch: $|V_{OS}| \approx 0.1 V_T \approx 2.6$ mV; the transistor with the wider base (smaller $I_S$) needs the larger $V_{BE}$. $R_{\text{TAIL}}$ does not affect the offset.

## Grading notes

+2: 2.4–2.7 mV with the reasoning $I_S \propto 1/W_B$ and $V_{OS} = V_T \ln(I_{S2}/I_{S1})$ (or its linearization). +1: right magnitude with a sign/direction slip or a thin justification. 0: correct relation but an arithmetic slip giving a wrong value. −2 (asserted as fact): 26 mV (missing the 0.1), offset proportional to $(\Delta W_B/W_B)^2$, $I_S \propto W_B$ used to claim a different magnitude, or an offset computed from $\beta$ mismatch or the tail resistance instead.
