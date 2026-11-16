# Golden Solution - A031

## Reference answer

$N \approx 252$ squares (≈ 1262 µm long), $R \approx 12.6$ kΩ, $C \approx 12.6$ pF, $A_R \approx A_C \approx 6.3\times10^3\ \mu\mathrm{m}^2$ (total ≈ 12,600 µm²).

- $R = 50N$ Ω, resistor area $A_R = N\times(5\ \mu\mathrm{m})^2 = 25N\ \mu\mathrm{m}^2$.
- $f_{-3dB} = 1/(2\pi RC) = 1$ MHz ⇒ $C = 1/(2\pi\cdot50N\cdot10^6)$ F, so $A_C = C/(2\ \mathrm{fF/\mu m^2}) = 1.59\times10^6/N\ \mu\mathrm{m}^2$.
- $A = 25N + 1.59\times10^6/N$ is minimized where $dA/dN = 0$: $N^2 = 1.59\times10^6/25 = 6.37\times10^4$, $N = 252.3$; at the optimum the two areas are equal.
- $R = 50\times252.3 = 12.6$ kΩ, $C = 1/(2\pi\cdot12.6\ \mathrm{k\Omega}\cdot1\ \mathrm{MHz}) = 12.6$ pF, $A_R = 25\times252.3 = 6308\ \mu\mathrm{m}^2$, $A_C = 12.6\ \mathrm{pF}/2\ \mathrm{fF/\mu m^2} = 6308\ \mu\mathrm{m}^2$.

## Grading notes

+2: N ≈ 250 (±3%), R ≈ 12.6 kΩ, C ≈ 12.6 pF, each area ≈ 6300 µm² (±3%), from a correct minimization (derivative, or the equal-area argument). +1: correct optimum with one value slipped (e.g. resistor area computed as N × 5 µm²), or correct values with no justification of the minimum. 0: correct area expression but the optimum not found, or an arbitrary N with consistent R, C and areas. −2 (asserted as fact): resistor area taken independent of N, ω and f confused (values off by 2π), or an "optimum" that is a maximum.
