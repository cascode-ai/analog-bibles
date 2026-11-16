# Golden Solution - A256

## Reference answer

≈ 34.7°.

- The output pole scales as $1/C_L$: $|p_2| = 2GB/4 = 0.5\,GB$.
- The LHP zero, $z_1 = -1/[C_c(R_z - 1/g_{mII})]$, does not depend on $C_L$ and stays at $-2GB$; GB $= g_{mI}/C_c$ is also unchanged.
- $\Phi_M = 180° - 90° - \arctan(GB/0.5GB) + \arctan(GB/2GB) - \arctan(1/3) = 90° - 63.43° + 26.57° - 18.43° = 34.7°$.
- (With the pole now below GB, the true unity-gain frequency drops to ≈ 0.64 GB; evaluated there the margin is ≈ 44°. The question asks for the phase at GB.)

## Grading notes

+2: $p_2$ moved to 0.5GB, zero kept at 2GB (LHP, adds lead), GB unchanged, and a margin of 34–35°. +1: correct reasoning with a slip of a few degrees, or ≈ 44° obtained consistently at the true crossover with the method stated. 0: the zero assumed to move with $p_2$ (gives 71.6° again) but stated as an assumption. −2 (asserted as fact): zero moved together with $p_2$ (cancellation preserved) presented as fact, GB divided by 4, or the LHP zero counted as lag.
