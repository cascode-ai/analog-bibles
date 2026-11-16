# Golden Solution - R651

## Reference answer

For an XOR, the useful null of the phase detector is at Δφ = 90°. There its output sits at the middle of its range (zero for a balanced, differential XOR), and around it the output is linear in both directions. A large $K_{PD}K_{VCO}$ keeps the lock point only a small amount away from this null.

- The XOR's average output versus Δφ is a triangle: 0 at Δφ = 0 and $V_0$ at π, linear in between with slope $K_{PD} = V_0/\pi$.
- It is symmetric about Δφ = 0 (it cannot tell lead from lag there), and its slope reverses at 0 and at π, so lock cannot be held at those points.
- Referred to its mid-level (differential output, or $V_{PD}$ measured from $V_0/2$), the output is $V_{PD} = K_{PD}(\Delta\phi - \pi/2)$ for 0 < Δφ < π.
- In lock the PD must supply the control voltage that makes $\omega_{out} = \omega_{in}$: $K_{PD}(\Delta\phi - \pi/2) = (\omega_{in} - \omega_0)/K_{VCO}$, where $\omega_0$ is the VCO frequency at the mid-level control voltage.
- Hence $\Delta\phi = \dfrac{\pi}{2} + \dfrac{\omega_{in} - \omega_0}{K_{PD}K_{VCO}} \to 90^\circ$ when $K_{PD}K_{VCO}$ is large.
- The same holds for a multiplier-type PD (output ∝ cos Δφ, zero at 90°). The 90° point also centers the operating point in the linear range, leaving ±90° of phase excursion before the gain reverses.

## Grading notes

+2: two parts are needed, connected through the lock condition $\Delta\phi - 90^\circ = (\omega_{in} - \omega_0)/(K_{PD}K_{VCO})$ or an equivalent argument. First, the XOR PD's null (mid-scale output, zero differential output, centre of the linear range) is at 90°. Second, the static deviation from that null shrinks as the loop gain grows. +1: both parts stated but not connected through the lock condition, or one part explained and the other only asserted. 0: only the remark that 90° is the middle of the XOR's linear range. -2 (asserted as fact): the XOR claimed to have its maximum gain (or maximum output) at 90° as the reason; or a large $K_{PD}K_{VCO}$ claimed to drive the phase difference to 0°, with the 90° attributed to something unrelated such as gate delay.
