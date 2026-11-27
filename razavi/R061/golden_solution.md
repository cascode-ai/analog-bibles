# Golden Solution - R061

## Reference answer

In the strong-inversion model, pinch-off occurs where the local channel potential reaches $V_G-V_{TH}$. The triode boundary is $V_G=V_{TH}+V_{DS}=1.9\ \mathrm{V}$.

- For $V_G\le V_{TH}=0.7\ \mathrm{V}$, no strong-inversion channel has formed, so there is no pinch-off point.
- For $0.7\ \mathrm{V}<V_G<1.9\ \mathrm{V}$, the channel pinches off before the drain. As $V_G$ rises at fixed $V_{DS}$, the voltage $V_{DS}-(V_G-V_{TH})$ across the depleted gap falls. The gap $\Delta L$ shortens and the pinch-off point moves toward the drain.
- At $V_G=1.9\ \mathrm{V}$, the inversion charge reaches zero at the drain edge and $\Delta L=0$.
- For $V_G>1.9\ \mathrm{V}$, the device is in triode. Inversion extends to the drain and there is no pinch-off.

## Grading notes

- +2 for motion toward the drain as $V_G$ rises, reaching it at $V_G=V_{TH}+1.2\ \mathrm{V}=1.9\ \mathrm{V}$, followed by triode operation with no pinch-off, and for stating that no channel exists below $V_{TH}$.
- +1 for the correct direction and triode conclusion without the 1.9 V boundary value.
- 0 for the correct direction alone.
- −2 for asserting that the point moves toward the source as $V_G$ increases or that pinch-off persists in triode.
