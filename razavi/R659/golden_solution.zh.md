$\Delta\phi = 2\pi\dfrac{\Delta I}{I_{D3}}\dfrac{T_P}{T_{in}} \approx 2\pi\dfrac{\Delta I}{I_P}\dfrac{T_P}{T_{in}}$，相当于时间偏移 $\Delta t = T_P\,\Delta I/I_{D3}$。

- 脉冲对齐时（波形 (a)），每个周期内都有净电流 ΔI 流过 $T_P$ 的时间，因此 $V_{cont}$ 每个周期缓慢上升 $\Delta I\,T_P/C$。这不是稳态。
- 锁定时 $V_{cont}$ 的平均值必须保持不变，因此每个周期的净电荷必须为零。环路会移动相位，使较弱的（DOWN）支路的脉冲提前 Δt 开始。
- 于是 DOWN 电流流过 $T_P + \Delta t$ 的时间，而 UP 电流只在重叠时间 $T_P$ 内流动。在波形 (b) 中，净电流先在 Δt 内为 $-I_{D3}$，然后在 $T_P$ 内为 $+\Delta I$。
- 电荷平衡：$|I_{D4}|T_P = I_{D3}(T_P + \Delta t)$，因此 $I_{D3}\Delta t = \Delta I\,T_P$，$\Delta t = T_P\,\Delta I/I_{D3}$。相位偏移为 $\Delta\phi = 2\pi\Delta t/T_{in}$。
- DOWN 脉冲由来自压控振荡器（VCO）的反馈边沿启动，因此该边沿比参考边沿超前 Δt。
- 该偏移正比于复位脉冲宽度 $T_P$。缩短 $T_P$ 可以减小偏移，但 $T_P$ 必须足够长，以避免死区（dead zone）。
- $V_{cont}$ 在每个周期内仍有周期性的纹波（先下凹，再斜坡式回升）。
