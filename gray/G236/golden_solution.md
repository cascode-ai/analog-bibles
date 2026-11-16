# Golden Solution - G236

## Reference answer

$v_o/v_i = -g_{m2}R_C = -1.94\ \mathrm{mA/V}\times5\ \mathrm{k\Omega} = -9.68$ (differential output $v_o$, input applied to one side, so $v_{id} = v_i$).

- $M_1$, $M_4$: unloaded source followers (gates of $M_2$, $M_3$ draw no current; bias sources ideal; $\lambda = 0$), so their gain is exactly 1 and no signal current flows in the 10-kΩ resistors.
- $M_2$, $M_3$: $I_D = 0.5$ mA each, $g_{m2} = \sqrt{2(60\ \mu)(62.5)(0.5\ \mathrm{m})} = 1.94$ mA/V; DM half-circuit gain $-g_{m2}R_C$.

## Grading notes

+2: −9.7 (±3%) with unity-gain followers. +1: small slip in $g_m$. 0: follower gain taken below 1 from an invented load, otherwise correct. −2 (asserted as fact): single-ended gain (half of the value) given as $v_o/v_i$ for the differential output without justification, bipolar-type input attenuation, or the gain computed with $I_D = 1$ mA per device.
