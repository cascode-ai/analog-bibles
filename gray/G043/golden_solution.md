# Golden Solution - G043

## Reference answer

$r_{o2} \approx 3.0$ MΩ.

- In the active region $r_o \approx 1/(\lambda I_D) = L_{\text{eff}}/[I_D\,(dX_d/dV_{DS})]$. Both devices are in the same process at the same $V_{DS}$, so $dX_d/dV_{DS}$ is (nearly) the same and $r_{o2} = r_{o1}\dfrac{I_{D1}}{I_{D2}}\dfrac{L_{\text{eff2}}}{L_{\text{eff1}}}$.
- $X_d$ (one-sided step junction into the 2.1×10¹⁶ layer, voltage $V_{DS} - V_{ov}$): device 1 $V_{ov} = \sqrt{2I_D/(k'W/L)} = 0.15$ V, $X_d \approx 0.54\ \mu$m; device 2 $V_{ov} = 0.48$ V, $X_d \approx 0.53\ \mu$m. $L_{\text{eff1}} = 7 - 0.6 - 0.54 = 5.86\ \mu$m, $L_{\text{eff2}} = 12 - 0.6 - 0.53 = 10.87\ \mu$m.
- $r_{o2} = 5\ \mathrm{M\Omega}\times(10/30)\times(10.87/5.86) = 3.1$ MΩ; neglecting $X_d$, $5\times(1/3)\times(11.4/6.4) = 2.97$ MΩ. (The measured $r_{o1}$ implies $dX_d/dV_{DS} = L_{\text{eff1}}/(I_Dr_{o1}) \approx 0.12\ \mu$m/V; the slightly lower $V_{DS} - V_{ov}$ of device 2 raises its $dX_d/dV_{DS}$ by ≈ 4%, giving ≈ 3.0 MΩ.)

## Grading notes

+2: 2.8–3.2 MΩ from $r_o \propto L_{\text{eff}}/I_D$ with the same $dX_d/dV_{DS}$ (lateral diffusion subtracted, $X_d$ optional; drawn lengths used directly give 2.86 MΩ, acceptable if the approximation is stated). +1: correct scaling with a small slip giving a value just outside the range. 0: correct scaling with current but length ratio inverted or omitted giving ≈ 1.7 MΩ, with otherwise sound reasoning. −2 (asserted as fact): $r_o$ increasing with current, independent of channel length, scaling with $W$, or a result such as 15 MΩ or 8.6 MΩ from wrong scaling.
