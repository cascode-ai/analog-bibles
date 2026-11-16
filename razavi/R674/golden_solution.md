# Golden Solution - R674

## Reference answer

The drain current must be the same at every point along the channel, and carriers cannot move infinitely fast. The mobile charge therefore cannot vanish anywhere; at the "pinch-off point" it only becomes very small.
- Continuity: $I_D = WQ_d(x)v(x)$ is constant along the channel. The carrier velocity is limited ($v \le v_{sat} \approx 10^7$ cm/s), so $Q_d(x) \ge I_D/(Wv_{sat}) > 0$. A zero charge density would require infinite velocity.
- The square-law picture, in which $Q_d = WC_{ox}[V_{GS} - V(x) - V_{TH}]$ vanishes where $V(x) = V_{GS} - V_{TH}$, is an artifact of the gradual-channel approximation. That approximation ignores the lateral field's contribution to the charge balance, and the diffusion current.
- Beyond the pinch-off point: the gate-to-channel voltage is below threshold, so no strong inversion layer is held at the surface. The lateral field becomes very large, because the remaining $V_{DS} - (V_{GS}-V_{TH})$ drops across the short depleted region ΔL near the drain. The few carriers there travel at (near) saturated velocity, spread away from the surface, and are swept into the drain, much like carriers crossing the depletion region of a reverse-biased junction.
- Consequences: the current is set by the inverted part of the channel (≈ $V_{GS}-V_{TH}$ across $L-\Delta L$), so $I_D$ saturates. ΔL grows with $V_{DS}$, which shortens the effective channel and slightly raises $I_D$: this is channel-length modulation (finite $r_O$).

## Grading notes

- +2: both parts. (1) Current continuity with a finite (saturated) carrier velocity forces a nonzero charge. (2) Beyond pinch-off there is a high-field depleted region where carriers move at saturated velocity and are swept into the drain; the current stays ≈ constant, and ΔL grows with $V_{DS}$ (channel-length modulation).
- +1: both parts right, but one thin (e.g., no velocity limit named, or no mention of channel-length modulation).
- 0: only one part answered correctly.
- -2 (asserted as fact): the current claimed to stop (no carriers reach the drain) beyond pinch-off, or the charge claimed to be exactly zero with no resolution of the continuity problem.
