# Golden Solution - R524

## Reference answer

$W = 5\ \mu$m: $r_O \approx 4.0$ kΩ. $W = 10\ \mu$m: $r_O \approx 3.3$ kΩ. The 5-μm device gives the higher output impedance, by about 20%.

- $W = 5\ \mu$m at 0.25 mA: read directly, $r_O \approx 4.0$ kΩ.
- $W = 10\ \mu$m at 0.25 mA is equivalent to two 5-μm devices in parallel, each carrying 0.125 mA with the same terminal voltages. From the plot, $r_O(0.125\ \mathrm{mA}) \approx 6.6$ kΩ, so $r_O \approx 6.6/2 \approx 3.3$ kΩ.
- Reason: for this device $r_O$ falls less than in proportion to $I_D$. $r_O I_D$ grows with current density and overdrive: ≈ 0.83 V at 0.125 mA, ≈ 1.0 V at 0.25 mA. So the narrower device, running at the higher current density, has the larger $r_O$. The long-channel model $r_O = 1/(\lambda I_D)$ would predict equal values. The narrower device does need a larger overdrive and $V_{DS,min}$.

## Grading notes

+2: $W = 5\ \mu$m, with $r_O \approx 4$ kΩ (3.8–4.2 kΩ) versus ≈ 3.3 kΩ (3.1–3.5 kΩ) obtained by width/current-density scaling ($r_O$ of the reference device at 0.125 mA, divided by 2). +1: correct conclusion and scaling method with values slightly outside these ranges, or the correct scaling argument with the conclusion but no numbers. 0: correct conclusion reached through a wrong scaling (e.g., the 10-μm value taken as $r_O(0.25\ \mathrm{mA})/2 = 2$ kΩ). -2 (asserted as fact): $W = 10\ \mu$m higher, or "both equal" because $r_O = 1/(\lambda I_D)$ is independent of $W$.
