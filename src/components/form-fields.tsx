export function Field({
	label,
	name,
	type = "text",
	required,
	textarea,
	placeholder,
}: {
	label: string;
	name: string;
	type?: string;
	required?: boolean;
	textarea?: boolean;
	placeholder?: string;
}) {
	const cls =
		"mt-2 w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15";
	return (
		<label className="block">
			<span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
				{label}
				{required ? <span className="ml-1 text-accent">*</span> : null}
			</span>
			{textarea ? (
				<textarea
					name={name}
					rows={4}
					required={required}
					placeholder={placeholder}
					className={cls}
				/>
			) : (
				<input
					name={name}
					type={type}
					required={required}
					placeholder={placeholder}
					className={cls}
				/>
			)}
		</label>
	);
}

export function Select({
	label,
	name,
	options,
}: {
	label: string;
	name: string;
	options: string[];
}) {
	return (
		<label className="block">
			<span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
				{label}
			</span>
			<select
				name={name}
				defaultValue=""
				className="mt-2 w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
			>
				<option value="" disabled className="text-muted-foreground">
					Select
				</option>
				{options.map((o) => (
					<option key={o} value={o} className="bg-white text-foreground">
						{o}
					</option>
				))}
			</select>
		</label>
	);
}
