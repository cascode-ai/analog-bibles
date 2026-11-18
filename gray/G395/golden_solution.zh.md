极点从约 $1.2 \times 10^{10}$ rad/s（0.4 mA）降至约 $4.6 \times 10^9$ rad/s（0.1 mA），电流减小 4 倍（降为原值的四分之一）时极点约降低 2.6 倍。

- 0.4 mA：$g_{m23}$ = 2 mA/V，$W_{23} \approx 63\ \mu$m，$C_{gs23} \approx 78$ fF，$C \approx 168$ fF，$|p| \approx 1.19 \times 10^{10}$ rad/s。
- 0.1 mA：$g_{m23}$ = 0.5 mA/V，$W_{23} \approx 16\ \mu$m，$C_{gs23} \approx 19$ fF，$C \approx 109$ fF，$|p| \approx 4.6 \times 10^9$ rad/s。
- 解释：过驱动电压（overdrive voltage）固定时，$g_{m23}$（分子）随电流按比例变化（×1/4），$W_{23}$ 以及 $C_{gs23}$ 也按 1/4 缩放。而 90-fF 固定电容（被镜像晶体管的栅极）不随之缩放，因此总电容只降到原值的 0.65。于是极点降为原来的 0.25/0.65 ≈ 0.38。降低共模检测放大器的功耗会使共模反馈（CMFB）环路中的这个次极点（nondominant pole）降低，从而减小 CMFB 的相位裕度（phase margin）。只有当固定电容可以忽略时，极点才会保持不变。
