# Golden Solution - R644

## Reference answer

$(W/L)_{5,6} \approx 197$ (e.g., 99 µm/0.5 µm) with the body effect; ≈ 83 if the body effect is neglected.

Derivation:
- With $V_{cont1} = V_{cont2} = 1.5$ V, $M_5$ and $M_6$ each carry $I_T/2 = 0.5$ mA, with sources at 0.5 V: $V_{GS} = 1.0$ V, $V_{SB} = 0.5$ V.
- $V_{TH} = 0.7 + 0.45(\sqrt{0.9 + 0.5} - \sqrt{0.9}) = 0.806$ V → overdrive 0.194 V.
- $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2) = 2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 0.194^2) = 197$.
- Without body effect: overdrive 0.3 V → $W/L = 82.9$.

## Grading notes

+2: ≈ 197 (±10%) with the body effect. +1: ≈ 83 (body effect neglected), otherwise correct. 0: correct setup with an arithmetic slip. -2 (asserted as fact): the full 1 mA per device (≈ 394 or 166), $V_{GS} = 1.5$ V (source taken at ground), overdrive taken as 0.5 V, or a wrong square-law formula.
