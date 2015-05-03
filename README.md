# MultiGrid.css 
## Grid with multidividers (2,3,4,5,6...n)
Adding a new grid dividers with gutter for modern webbrowsers.

## Sample
[http://dev.fedojo.com/multigrid.css/](http://dev.fedojo.com/multigrid.css/)

## Current state
Initial grid with media queries + offsets(version BETA)


## Usage columns/offsets in CSS
<table>
	<tr>
	<td>
		Class
	</td>
	<td>
		Desc
	</td>
	</tr>
	<tr>
		<td>
			large-1of(1..10)
		</td>
		<td>
			Column in desktop view
		</td>
	</tr>
	<tr>
		<td>
			medium-1of(1..10)
		</td>
		<td>
			Column in tablet view
		</td>
	</tr>
	<tr>
		<td>
			small-1of(1..10)
		</td>
		<td>
			Column in mobile view
		</td>
	</tr>
	<tr>
		<td>
			offset-large-1of(1..10)
		</td>
		<td>
			Offset in desktop view
		</td>
	</tr>
	<tr>
		<td>
			offset-medium-1of(1..10)
		</td>
		<td>
			Offset in tablet view
		</td>
	</tr>
	<tr>
		<td>
			offset-small-1of(1..10)
		</td>
		<td>
			Offset in mobile view
		</td>
	</tr>
</table>


## Usage columns/offsets in SASS
<table>
	<tr>
		<th>Mixin</th>
		<th>Desc</th>
	</tr>
	<tr>
		<td>buildGrid</td>
		<td>Builds grid classes : small, medium, large and offsets</td>
	</tr>
</table>

## Change log

### 0.0.4 (3.05.2015)
- Medium and small offsets
- Adding sass-breakpoint
- Mixin for generating grid classes
- Grid classes from 1 - 16 (buildGrid)

### 0.0.3 (2.05.2015)
- CSS minification
- Large offsets

### 0.0.2 (29.05.2015)
- Media queries (new classes: small, medium)
- Variables for gutter (small, medium, large)
- Variables for media queries

### 0.0.1 (28.05.2015)
- Adding Gulp
- Adding SASS/Compass
- Files partialisation

### 0.0.0 Init (17.05.2015)
- Idea + initial code


